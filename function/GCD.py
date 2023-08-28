# Create a function to find the greatest common divisor (GCD) of two numbers
def gcd(a,b):
    i=1
    while (i<=a and i<=b):
        if(a% i ==0 and b%i==0):
            gcd=i
        i+=1
    print(gcd)
a=int(input("Enter 1st No:"))
b=int(input("Enter 2nd No:"))
gcd(a,b)