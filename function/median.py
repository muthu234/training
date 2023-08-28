# Create a function to find the median of a list of numbers.
def find_median(l):
    sorted_lst = sorted(l)
    n = len(sorted_lst)
    if n % 2 == 1:
        return sorted_lst[n // 2]
    else:
        mid1 = sorted_lst[(n // 2) - 1]
        mid2 = sorted_lst[n // 2]
        return (mid1 + mid2) / 2
numbers = [5, 2, 9, 1, 7, 3, 8]
median = find_median(numbers)
print(median) 
