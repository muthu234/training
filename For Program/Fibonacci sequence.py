# Print the Fibonacci sequence up to the 20th term.
a=0
b=1
for i in range(1,21):
    print(a,end='\t')
    a=a+b
    a,b=b,a