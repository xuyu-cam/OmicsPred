import csv
import sys
import getopt
import pandas as pd
import json
from json import JSONEncoder


json_template = {

}

json_to_sumps = {}

ifile = ""
ofile = ""
otype = ""

myopts, args = getopt.getopt(sys.argv[1:], "i:t:o")

for o, a in myopts:
    if o == '-i':
        ifile = a
    elif o == '-t':
        otype = a
    elif o == '-o':
        ofile = a

    else:
        print("Usage: %s -i input -o output" % sys.argv[0])


df = pd.read_csv(ifile)


def gettable():
    cols = list(df)
    data = []m
    subdata = {}
    for i in cols:
        subdata["name"] = i
        subdata["data"] = dict(df[i])
        data.append(subdata)
        subdata = {}
    print("to table !!")
    return data


def getplot():  
    del df["Ensembl ID"]
    del df["Gene"]
    del df["#SNP"] 
    cols = list(df)
    data = []
    subdata = {}
    for i in cols:
        subdata["name"] = i
        subdata["title"] = i
        subdata["data"] = dict(df[i])
        data.append(subdata)
        subdata = {}
    print("to plot !!")
    return data








 


print("the stype :" + otype)

if otype == "plot":
    json_string = json.dumps(getplot(),indent=4 )
    with open("Transcriptomics_illumina_RNAseq/plot.json", "w") as outfile:
        outfile.write(json_string)
else:
    print("please chose your type -t table or -t plot")
