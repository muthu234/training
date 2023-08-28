# Write a function that calculates the power of a number raised to an exponent.
def power(base,exponent):
    a=1
    for i in range(exponent):
        a*=base
    return a
print(power(2,5))