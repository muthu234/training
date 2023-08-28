#program to input all sides of a triangle and check whether triangle is valid or not.
a=int(input("Enter The  1st Number :")) 
b=int(input("Enter The  2nd Number :")) 
c=int(input("ENter The 3rd Number :"))
if(a == b ==c):
    print("Equilateral")
elif(a== b or a==c or b==c):
    print("Isosceles")
else:
    print("Scalene")