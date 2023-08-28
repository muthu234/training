# Write a program to enter any number and print all factors of the number.
n=int(input("Enter The No :"))
for i in range(1,n+1):
    if (n % i == 0):
        print(i,end="\t")
