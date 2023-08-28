#Write a code snippet that checks if a given year is a leap year using an if-else statement.
year = int(input("Enter The Year :"))
if (year%4==0 and year % 100 !=0):
    print("Leap Year")
else:
    print("Not Leap Year")
