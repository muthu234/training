# Write a program to make such a pattern like a pyramid with an asterisk
k=1
for i in range(1,6):
    for j in range(1,(6-i)+1):
        print(" ",end="")
    print("*"*k)
    k+=2
    
    