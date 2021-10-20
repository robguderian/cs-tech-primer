import unittest

import some_code


class TestStringMethods(unittest.TestCase):
    def test_add(self):
        result = some_code.add(1, 2)
        self.assertEqual(3, result, "1 + 2 should equal 3")
