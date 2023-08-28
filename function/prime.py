# Implement a function to check if a number is prime.
def prime(n):
    for i in range(2,50):
        count=0
        for j in range(1,i+1):
            if (i%j == 0):
                count+=1
        if(count==2):
            print(i,"prime")
prime(50)