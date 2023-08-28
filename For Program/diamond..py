# Write a program to display the pattern like a diamond.
for i in range(5):
    for j in range(i+1):
        print("*",end='')
    print()
for k in range(5,-1,-1):
    print("*"*k,end="\n")
print()