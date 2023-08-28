# Implement a function to calculate the volume of a rectangular prism given its dimensions.
def vol(l,w,h):
    volume=l*w*h
    print(volume)
l=int(input('Enter The Length :'))
w=int(input('Enter The Width :'))
h=int(input('Enter The Height :'))
vol(l,w,h)