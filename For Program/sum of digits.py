# Write a program to find the sum of digits of a given number.
n=int(input("Enter The Number :"))
sum=0
for i in range(n+1):
    sum+=i
print(sum)