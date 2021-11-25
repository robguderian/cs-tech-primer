"""
Generate the manifest.json file by recursively reading through the
docs/ directory.

All sub-directories will be interpreted as modules
All image files will be interpreted have type resource
All other files will have type topic

To modify type, name, or to ignore a file, add it to the .mfconfig file
in the root directory and use the following syntax

# This is a comment
IGNORE path/to/file           # Ignores a file or directory
RENAME path/to/file new_name  # Set title of file or directory to new_name
TYPE path/to/file new_type    # Set type of file
"""
import json
import os
from pathlib import Path

CONFIG_FILE = ".mfconfig"
CONTENT_ROOT = Path("docs")
VALID_TYPES = {"topic", "module", "resource"}
COMMANDS = {"IGNORE": 1, "RENAME": 2, "TYPE": 2}  # Cmd: n_args
RESOURCE_EXTS = {".jpg", ".jpeg", ".png", ".gif"}
IGNORE_FOLDERS = {'__pycache__', 'htmlcov', 'node_modules',
                  'vendor', '_site', '.DS_Store'}  # other files to always ignore


class TokenCheck:
    def __init__(self, is_valid, err_msg="", cmd="", args=""):
        self.is_valid = is_valid
        self.err_msg = err_msg
        self.cmd = cmd
        self.args = args


def validate_tokens(tokens, line_num):
    n_tokens = len(tokens)

    # Blank line
    if n_tokens == 0 or tokens[0][0] == "#":
        return TokenCheck(True)

    # Checks for all commands
    cmd = tokens[0].upper()
    err_base = format(f"ERROR L{line_num}: [{cmd}]: ")

    if cmd not in COMMANDS:
        msg = err_base + format(f"Unknown command")
        return TokenCheck(False, msg)

    n_args = COMMANDS[cmd]

    if n_tokens-1 < n_args:
        msg = err_base + format(f"Too few arguments, "
                                f"expected {n_args}, got {n_tokens-1}")
        return TokenCheck(False, msg, cmd)

    if n_tokens-1 > n_args and tokens[1+n_args][0] != "#":
        msg = err_base + format(f"Too many arguments, "
                                f"expected {n_args}, got {n_tokens-1}")
        return TokenCheck(False, msg, cmd)

    path_arg = CONTENT_ROOT.joinpath(tokens[1])
    if not os.path.exists(path_arg):
        msg = err_base + format(f"Invalid path [{tokens[1]}]")
        return TokenCheck(False, msg, cmd)
    tokens[1] = Path(tokens[1]).as_posix()

    args = tokens[1:n_args+1]

    # Command specific stuff
    if cmd == "TYPE" and args[1] not in VALID_TYPES:
        msg = format(f"Invalid type [{args[1]}]")
        return TokenCheck(False, msg, cmd)

    return TokenCheck(True, "", cmd, args)


def get_config():
    result = {
        "IGNORE": set(),
        "RENAME": dict(),
        "TYPE": dict(),
    }

    with open(CONFIG_FILE, 'r') as conf:
        lines = conf.readlines()
        for i, line in enumerate(lines):
            tokens = line.split()
            token_check = validate_tokens(tokens, i+1)
            if not token_check.is_valid:
                print(token_check.err_msg)
                exit(-1)
            elif token_check.cmd == "":
                continue
            elif token_check.cmd == "IGNORE":
                result["IGNORE"].add(token_check.args[0])
            else:
                result[token_check.cmd][token_check.args[0]
                                        ] = token_check.args[1]

    return result


def get_children(path, config):
    docs_path = CONTENT_ROOT.joinpath(path)
    dir_contents = sorted(os.listdir(docs_path))
    result = []

    for item in dir_contents:
        if item in IGNORE_FOLDERS:
            continue

        item = path.joinpath(item)
        item_str = item.as_posix()

        if item_str in config["IGNORE"]:
            continue

        ftitle = item.stem.title().replace('_', ' ')
        if item_str in config["RENAME"]:
            ftitle = config["RENAME"][item_str].replace('_', ' ')

        if CONTENT_ROOT.joinpath(item).is_file():
            ext = item.suffix.lower()
            ftype = "resource" if ext in RESOURCE_EXTS else "topic"
            result.append(
                {
                    "title": ftitle,
                    "type": ftype,
                    "fileName": item.as_posix()
                }
            )
        else:
            result.append(
                {
                    "title": ftitle,
                    "type": "module",
                            "children": get_children(item, config)
                }
            )

    return result


def main():

    result = {
        "$schema": "https://raw.githubusercontent.com/Brightspace/update-course-action/master/manifest_schema_v1_0.json",
        "modules": []
    }

    config = get_config()
    #docs = [d for d in os.listdir(CONTENT_ROOT) if CONTENT_ROOT.joinpath(d).is_dir() and d not in config["IGNORE"]]
    # force an order
    # sort them
    docs = [
        '1_languages',
        '2_shell',
        '3_reading_man_pages',
        '4_quality_code',
        '5_debugging',
        '6_unix',
        '7_building',
        '8_virtualization',
        '9_versioning_code',
        '10_maintaining_servers',
        'language_bootcamp']

    for dir in docs:

        title = dir.replace('_', ' ').title()
        if dir in config["RENAME"]:
            title = config["RENAME"][dir].replace('_', ' ')

        path = Path(dir)
        children = get_children(path, config)
        result["modules"].append(
            {
                "title": title,
                "type": "module",
                        "children": children
            }
        )

    #print(json.dumps(result, indent=4))
    with open("manifest.json", 'w+') as out:
        out.write(json.dumps(result, indent=4))


if __name__ == "__main__":
    main()
