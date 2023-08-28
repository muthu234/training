# Write a function to find the common elements between two lists.
l1=[3,2,4]
l2=[2,3]
def Elements(l1,l2):
    for i in range(len(l1)):
        for j in range(len(l2)):
            if l1[i]==l2[j]:
                print(l1[j])
Elements(l1,l2)
        
