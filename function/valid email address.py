# Implement a function that checks if a given string is a valid email address.
def email(a):
    if (a[:-10] == "@gmail.com"):
        print("Valid Email Id")
    else:
        print("Not Email Id")
a=["vel@gmail.com"]
email(a)