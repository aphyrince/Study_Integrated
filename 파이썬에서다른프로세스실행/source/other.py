import os
import sys

print("im other.py!")

f = open("text.txt", "r", encoding="utf-8")

data = f.read()
print(data)
f.close()

print(os.environ)

print(sys.argv[1])
print(sys.argv[2])
