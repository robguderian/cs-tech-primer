#!/usr/bin/env python3

'''
Generates a full cheatsheet document by combining the
cheatsheets from each section.
'''

import os
import re
import glob
from sys import platform

def write(in_handle, out_handle):
    '''
    Write input file to output file, increasing all heading levels

    :param in_handle: input file handle
    :param out_handle: output file handle
    '''
    lines = in_handle.readlines()
    num_lines = len(lines)
    
    for i in range(len(lines)):
        line = lines[i]
        line_len = len(line)

        # Since apparently i can't just increment i after adjusting H2,
        # i have to do this
        if line_len > 0 and line[0] == "-":
            continue

        # Adjust H3+
        if line_len >= 3 and line[0] == '#':
            line = "#" + line
        
        # Adjust H2 underline to H3
        elif i < num_lines-1 and len(lines[i+1]) > 0 and lines[i+1][0] == "-":
            line = "### " + line
        
        # Adjust H1 to H2
        elif line_len > 0 and line[0] == "=":
            line = ("-" * line_len + "\n")
        
        out_handle.write(line)
    
    out_handle.write("\n")


os.chdir("../")

output = open("./cheatsheet.md", "w")
output.truncate(0)
output.write("Java Cheat Sheet\n================\n\n")

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
if platform == "win32":
    output.truncate(output.tell() - 2) # CRLF
else:
    output.truncate(output.tell() - 1) # NL

output.close()
