# Create a function that finds the sum of all multiples of a given number below a specified limit.
def limit(number, limit):
    total_sum = 0
    for i in range(number, limit, number):
        total_sum += i
    return total_sum
multiple = 3
upper_limit = 10
result = limit(multiple, upper_limit)
print(result)  
