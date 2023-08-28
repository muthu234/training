# Write a program to display n terms of natural number and their sum.
sum =0
n=int(input("Enter The Number :"))
for i in range(n+1):
    sum+=i
    print(sum)