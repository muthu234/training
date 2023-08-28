# Write a program that takes a person's age as input and prints "Child" if the age is under18, "Adult" if the age is between 18 and 65, and "Senior" if the age is over 65
age=int(input("Enter The Age :"))
if (18 >=age):
    print("Child")
elif(18<=age and 65 >=age):
    print("adult")
else:
    print("Senior")
