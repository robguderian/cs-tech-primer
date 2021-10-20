PHONY=run

run:
	python3 some_code.py

test:
	python3 -m unittest test_some_code.py

# coverage requires the "coverage" tool to be installed.
# https://coverage.readthedocs.io
# pip install coverage
coverage:
	coverage run --source=. -m unittest test_some_code.py
	coverage html
	echo Now check out the htmlcov folder

profile:
	python3 -m cProfile -s tottime some_code.py
