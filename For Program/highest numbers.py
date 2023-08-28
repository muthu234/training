# Write a program to print a pattern like highest numbers of columns appear in first row.
n=int(input("Enter The No:"))
for i in range(1,n):
   for j in range(i,n-1):
    print(j,end="")
   print()
    

