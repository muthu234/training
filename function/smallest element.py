# Create a function to find the smallest element in a listdef find_smallest_element(lst):
def smallest(l):
    if not l:
        return None      
    smallest = l[0]    
    for num in l:
        if num < smallest:
            smallest = num
    return smallest
a=[2,3,5,8,10]
print(smallest(a))