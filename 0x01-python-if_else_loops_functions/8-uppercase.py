#!/usr/bin/python3

def uppercase(input_str):
    result = ""
    for char in input_str:
        if ord(char) >= 97 and ord(char) <= 122:
            char = chr(ord(char) - 32)
        return += char
    return result
