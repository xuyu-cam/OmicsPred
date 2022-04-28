import csv
import sys
import getopt
import pandas as pd
import json
import numpy as np
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


df = pd.read_csv(ifile , sep=",")



def np_encoder(object):
    if isinstance(object, np.generic):
        return object.item()


def gettable():
    cols = list(df)
    data = []
    subdata = {}
    for i in cols:
        subdata["name"] = i
        subdata["data"] = dict(df[i])
       
        data.append(subdata)
        subdata = {}
    print("to table !!")
    return data




def getplot():    
    cols = list(df)
    data = []
    subdata = {}
    for i in cols:
        subdata["nae"] = i
        subdata["data"] = int(dict(df[i]) )
        
        subdata["title"] = i
        data.append(subdata)
        subdata = {}
    print("to plot !!")
    return data








 


print("the stype :" + otype)


if __name__ == "__main__":
    gettable()
    json_string = json.dumps(gettable(),indent=4 , default=np_encoder )
    with open("table.json", "w") as outfile:
        outfile.write(json_string)
else:
    print("please chose your type -t table or -t plot")
