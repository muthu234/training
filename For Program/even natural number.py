# Write a program to display the n terms of even natural number and their sum.
n=int(input("Enter The Number :"))
sum=0
for i in range(1,n+1):
    if(i%2==0):
        print(i,end='\n')
        sum+=i
print('Sum of Even Number :',sum)