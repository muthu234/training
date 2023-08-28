# Implement a function to calculate the volume of a sphere given its radius.
def sphere(r):
    volume=(4/3)*3.14*r*r*r
    return volume
r=int(input("Enter The Radius :"))
print(sphere(r))