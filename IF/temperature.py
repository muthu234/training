# Write a program that takes a temperature as input and prints "Fever" if the temperatureis 37.5°C or higher, and "No Fever" if the temperature is below 37.5°C.
temperature =float(input("Enter The Temperature :"))
if(temperature >= 37.5):
    print("Fever")
else:
    print("Not Fever")