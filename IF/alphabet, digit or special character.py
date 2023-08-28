# program to input any character and check whether it is alphabet, digit or special character.
a =input("Enter The Letter:")
if (a>="a" and a <="z"):
    print("Alphabet")
elif(a>='0'and a<='9'):
    print("Digit")
else:
    print("special character")