# .Implement a function that converts a list of integers to a single integer 
def converts_integer(l):
    for i in range(len(l)):
        print(l[i],end='\t')
l=[2,4,5,6,9]
converts_integer(l)