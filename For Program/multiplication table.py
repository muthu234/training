# Write a program to display the multiplication table vertically from 1 to n.
n=int(input("Enter The Table No :"))
for i in range(1,n):
    for j in range(1,11):
        print(i,'X',j,'=',i*j)
    print(end='\n')
    