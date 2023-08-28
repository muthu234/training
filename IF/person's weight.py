# Write a program that takes a person's weight in kilograms as input and prints "Underweight" if the weight is below 18.5, "Normal weight" if the weight is between 18.5 and 24.9, "Overweight" if the weight is between 25 and 29.9, and "Obese" if the weight  is 30 or higher.
weight=float(input("Enter The person's weight :"))
if (18.5 >= weight):
    print("Underweight")
elif(weight<=18.5 and weight<=24.9):
    print("Normal weight")
elif(weight<=25 and weight<=29.9):
    print("Normal weight")
else:
    print("Obese")
