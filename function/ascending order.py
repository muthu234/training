# Implement a function that checks if a list is sorted in ascending order.
def ascen(a):
    for num in a:
        temp=0
        for i in range(num+1):
            if i>temp:
                temp=i
            print(temp)
a=8,4
ascen(a)