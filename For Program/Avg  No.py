# Calculate the average of numbers in an array.
sum=0
avg=0
l=[5,10,30,20,10]
for i in range(len(l)):
    sum+=l[i]
    avg=sum / len(l)
print(sum)
print(avg)