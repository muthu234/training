# program to check whether a number is divisible by 5 and 11 or not.
a=int(input("Enter The Number :"))
if (a % 5 == 0 and a %11 == 0):
    print("divisible by 5")
else:
    print("Not")