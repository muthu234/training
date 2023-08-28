# Write a program that takes a person's age and number of years of work experience as input and prints "Entry-level" if the person is under 25 and has less than 1 year of work experience, "Juior" if the person is between 25 and 40 and has between 1 and 5 years of work experience, "Senior" if the person is over 40 and has between 5 and 10 years of work experience, and "Expert" if the person is over 40 and has more than 10 years of work experience.
age=int(input("Enter The Age :"))
year=int(input("Enter The Year :"))
if (age<=25 and year<=1):
    print("Entry Level")
elif(age >=25 and age<=40 and year<=5):
    print("Junior")
elif(age >=40 and year<=10 and year>=5):
    print("Senior")
else:
    print("Expert")