# Print the numbers from 1 to 100, but for multiples of 3, print "Fizz," for multiples of 5, print "Buzz," and for multiples of both 3 and 5, print "FizzBuzz."
for i in range(1,101):
    if (i%3 == 0):
        print("Fizz",i)
    elif (i%5 == 0):
        print("Buzz",i)
    else:
        print("Fizz Buzz",i)