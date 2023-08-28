# Write a function to generate the Fibonacci sequence up to a given number of terms.
def fib(n):
    a=0
    b=1
    for i in range(n+1):
        print(a)
        a=a+b
        a,b=b,a
    return a,b
n=int(input("Enter The No:"))
print(fib(n))