# Create a function to find the smallest element in a list.
def smallest(lst):
    if len(lst) == 0:
        return None 
    smallest = lst[0]
    for num in lst:
        if num < smallest:
            smallest = num
    print(smallest)
l=[6,88,3,2]
smallest(l)
