# Write a program to display the pattern like a pyramid using asterisk and each row contain an odd number of asterisks.
for i in range(1,10):
    if(i%2!=0):
        print("*"*i,end="")
    print()