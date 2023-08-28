# Write a function that finds the second largest element in a list
def second_largest_element(l):
    if len(l) < 2:
        return None  
    largest = second_largest = float('-inf')  
    for num in l:
        if num > largest:
            second_largest = largest
            largest = num
        elif num > second_largest and num != largest:
            second_largest = num
    return second_largest
numbers = [5, 2, 9, 1, 7, 3]
second_largest = second_largest_element(numbers)
print(second_largest)  

