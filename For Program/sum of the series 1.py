# Write a program to find the sum of the series 1 +11 + 111 + 1111 + .. n terms.
sum = 0
a=1
n=int(input("Enter The Number :"))
for i in range(n):
    sum+=a
    a=(a*10)+1
    print(a,end='\t')
print('\n',"Sum of Series",sum)

