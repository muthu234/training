# Print the reverse of a given string.
rev=str(input("Enter The String :"))
for i in range(len(rev)-1,-1,-1):
    print(rev[i])
