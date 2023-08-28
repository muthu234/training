# Write a program that takes a student's grade point average (GPA) as input and prints "Academic Probation" if the GPA is below 2.0 and "Good Standing" otherwise.
gpa=float(input("Enter The GPA :"))
if(gpa <2.0):
    print("Academic probation")
else:
    print("Good Stading")