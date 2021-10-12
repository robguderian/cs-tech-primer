'''
Generates a full cheatsheet document by combining the
cheatsheets from each section.
'''

import os
import re
import glob

def write(in_handle, out_handle):
    '''
    Write input file to output file, increasing all heading levels

    :param in_handle: input file handle
    :param out_handle: output file handle
    '''
    lines = in_handle.readlines()

    for line in lines:
        if len(line) > 0 and line[0] == '#':
            line = "#" + line
        out_handle.write(line)
    
    out_handle.write("\n")


os.chdir("../")

output = open("./cheatsheet.md", "w")
output.truncate(0)
output.write("# Java Cheat Sheet\n\n")

# Get all directories following [0-9]_* and sort them
sections = [dir for dir in os.listdir() if re.match('([0-9]_)', dir)]
sections.sort()

for section in sections:
    # find a cheatsheet.md
    in_file = glob.glob("./" + section + "/cheatsheet.md")
    if len(in_file) != 1:
        break
    
    # Append it
    print(f"Writing {in_file[0]}")
    input = open(in_file[0], 'r')
    write(input, output)
    input.close()

# Remove last extra newline
output.truncate(output.tell() - 2)

output.close()
