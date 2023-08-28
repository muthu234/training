# Create a function that takes a list of integers and returns a new list with only the unique elements.
def unique_elements(l):
    unique_elements = []
    for num in l:
        if num not in unique_elements:
            unique_elements.append(num)
    return unique_elements
l=[1,2,2,3,4,3,4]
print(unique_elements(l))