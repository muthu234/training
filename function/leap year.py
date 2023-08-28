# Implement a function to check if a given year is a leap year.
def leap(year):
    if (year%4==0 and year % 100 !=0):
        print("Leap Year")
    else:
        print("Not Leap Year")
year = int(input("Enter The Year :"))
leap(year)