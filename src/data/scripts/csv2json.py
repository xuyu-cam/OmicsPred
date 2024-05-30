import os
import re
import json
import argparse
import pandas as pd

col_separator = '\t'
training_cohort = 'UKB'
training_cohort_label = training_cohort+' (internal validation)'

def parse_file_2_table(input_file):
    data = {}
    df = pd.read_csv(input_file, sep=col_separator)
    for col in df.columns:
        data[col] = {
            'name': col,
            'data': {}
        }
    for index, row in df.iterrows():
        for col in df.columns:
            value = row[col]
            # Replace NaN values
            if pd.isna(value):
                value=None
                print(f"- NAN value for {col} ({index})")
            elif isinstance(value, float):
                value = round(value,3)
            data[col]['data'][str(index)]=value
    newdata = []
    for col in df.columns:
       newdata.append(data[col])
    return newdata


def parse_file_2_plot(input_file):
    mr_suffix = '_MissingRate'
    data = {}
    df = pd.read_csv(input_file, sep=col_separator)
    cols = []
    for col in df.columns:
        if re.search('_',col):  
            (col_name,col_type) = col.rsplit('_',1)
            col_label = col_name
            col_title = col
            if col_type in ['R2','Rho','MissingRate']:
                cols.append(col)
                if col_label == 'Internal':
                    col_label = col_label.replace('Internal',training_cohort_label)
                    col_title = col_title.replace('Internal',training_cohort_label)
                else:
                    col_label = col_label.replace('Withheld',training_cohort+'_Withheld')
                    col_title = col_title.replace('Withheld',f'{training_cohort}_Withheld')
                data[col] = {
                    'name': col_label,
                    'title': col_title,
                    'type': '_'+col_type,
                    'data': {}
                }
            mr_col = f'{col_name}{mr_suffix}'
            if col_type == 'Rho' and mr_col not in df.columns:
                cols.append(mr_col)
                col_title = mr_col.replace('Withheld',f'{training_cohort}_Withheld')
                data[mr_col] = {
                    'name': col_label,
                    'title': col_title,
                    'type': mr_suffix,
                    'data': {}
                }

    for index, row in df.iterrows():
        for col in cols:
            if col in row.keys():
                value = row[col]
                if isinstance(value, float):
                    value = round(value,3)
            elif col.endswith(mr_suffix):
                value = 0
            # Replace NaN values
            if pd.isna(value):
                value=None
                print(f"- NAN value for {col} ({index})")
            data[col]['data'][str(index)]=value
    newdata = []
    for col in cols:
       newdata.append(data[col])
    return newdata


##########################################

def main():

    argparser = argparse.ArgumentParser()
    argparser.add_argument('-i', '--input_file', dest='input_file', help='Input file', required=True, metavar='INPUT_FILE')
    argparser.add_argument('-o', '--output_dir', dest='output_dir', help='Output file', required=True, metavar='OUTPUT_DIR')

    args = argparser.parse_args()

    input_file = args.input_file
    output_dir = args.output_dir

    if not os.path.isfile(input_file):
        print(f"Error: File '{input_file}' can't be found!")
        exit(1)

    if not os.path.isdir(output_dir):
        print(f"Error: Output dir '{output_dir}' can't be found!")
        exit(1)

    if not output_dir.endswith('/'):
        output_dir += '/'

    # table.json
    output_table_file = output_dir + 'table.json'
    table_data = parse_file_2_table(input_file)
    table_json_string = json.dumps(table_data, indent=4)#.replace('NaN', 'null')
    with open(output_table_file, "w") as outfile:
        outfile.write(table_json_string)

    # plot.json
    output_plot_file = output_dir + 'plot.json'
    plot_data = parse_file_2_plot(input_file)
    plot_json_string = json.dumps(plot_data, indent=4)#.replace('NaN', 'null')
    with open(output_plot_file, "w") as outfile:
        outfile.write(plot_json_string)

if __name__ == '__main__':
    main()