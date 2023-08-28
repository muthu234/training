# Write a program to display the sum of the series [ 9 + 99 + 999 + 9999 ...]
sum = 0
a=9
n=int(input("Enter The Number :"))
for i in range(n):
    sum+=a
    a=(a*10)+9
    print(a,end='\t')
print('\n',"Sum of Series",sum)

