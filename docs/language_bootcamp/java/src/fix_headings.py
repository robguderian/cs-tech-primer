#!/usr/bin/env python3

'''
Go through all markdown files and check headings, fix if needed.
'''

import os
import re
import glob

os.chdir("../")


def fix(fpath):
    '''
    Write input file to output file, increasing all heading levels

    :param in_handle: input file handle
    :param out_handle: output file handle
    '''
    in_handle = open(fpath, 'r')
    lines = in_handle.readlines()
    in_handle.close()

    out_handle = open(fpath, 'w')
    out_handle.truncate(0)

    for line in lines:
        if len(line) >= 3 and line[0] == '#':
            # Level 1 Header
            if line[1] != '#':
                out_handle.write(line[2:])
                out_handle.write(("=" * len(line)) + "\n")
            # Level 2 Header
            elif line[1] == '#' and line[2] != '#':
                idx = 3 if (len(line) >= 4) else 2
                out_handle.write(line[idx:])
                out_handle.write(("-" * len(line)) + "\n")
            else:
                out_handle.write(line)
        else:
            out_handle.write(line)
    
    out_handle.close()


md_files = glob.glob("./**/*.md", recursive=True)
print(md_files)

for md_file in md_files:
    fix(md_file)