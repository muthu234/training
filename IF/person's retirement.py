# Write a program that takes a person's age and income as input and prints the  savings goal.
age =int(input("Enter The Age :"))
if (age <18 or age <65):
    print("No Retirement Savings Needed")
elif(age>70):
    print("Low Retirement Savings Goal")
elif(age<70 and age<80):
    print("Middle Retirement Savings Goal")
else:
    print("High Retirement Savings Goal")