# Given two lists, find the common elements and store them in a new list.
l1=[1,2,3,4,15]
l2=[1,2,45,4,5]
l3=[]
for i in l1:
    if i in l2:
        l3.append(i)
        print(l3)
