# Create a program using a for loop to find the sum of all positive integers less than 1000 that are multiples of 3 or 5.
sum=0
for i in range(1,1000):
    if (i % 3 == 0 or i % 5 == 0):
        sum+=i
print(sum)