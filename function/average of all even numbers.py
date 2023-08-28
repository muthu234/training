# Write a function that calculates the average of all even numbers in a list.
def average(n):
    avg=0
    for i in range(n):
        if(i%2==0):
            avg+=i
            print(avg)
n=int(input("Enter The No: "))
average(n)