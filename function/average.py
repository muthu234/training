# Create a function to find the average of a list of numbers
def average(l):
    sum=0
    avg=0
    for i in range(len(l)):
        sum+=l[i]
        avg=sum / len(l)
    print(sum)
    print(avg)
l=[5,10,30,20,10]
average(l)