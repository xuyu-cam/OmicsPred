import json
import sys
import getopt
import pandas as pd


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

f = open(ifile)
data = json.load(f)

for i in range(0, len(data)):
    stri = data[i]["name"]
    r2 = (stri.find("_R2") != -1)
    rho = (stri.find("_Rho") != -1)
    missed = (stri.find("_MissingRate") != -1)
    if r2:
        j = stri.find("_R2")
        l = list(stri)
        type = l[j:len(stri)]
        del(l[j:len(stri)])
        stri = "".join(l)
        data[i]["name"] = stri
        print(stri)
        data[i]["type"] = "_R2"
    if rho:
        j = stri.find("_Rho")
        l = list(stri)
        type = l[j:len(stri)]
        del(l[j:len(stri)])
        stri = "".join(l)
        data[i]["name"] = stri
        print(stri)
        data[i]["type"] = "_Rho"
    if missed:
        j = stri.find("_MissingRate")
        l = list(stri)
        type = l[j:len(stri)]
        del(l[j:len(stri)])
        stri = "".join(l)
        data[i]["name"] = stri
        print(stri)
        data[i]["type"] = "_MissingRate"


json_string = json.dumps(data)
with open(ifile, "w") as outfile:
    outfile.write(json_string)

data[0]["type"] = "hello"
print(data[0]["type"])
