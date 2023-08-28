# Write a program that takes a person's income as input and prints the person's tax bracket. The program should print "No Tax" if the income is below the taxable income threshold, "Low Tax Bracket" if the income is between the taxable income threshold and the middle-income tax bracket, "Middle Tax Bracket" if the income is between themiddle-income tax bracket and the high-income tax bracket, and "High Tax Bracket" ifthe income is above the high-income tax bracket.
salary=int(input("Enter The salary : "))
if(salary <=60000):
    print("No Tax")
elif(salary<=90000):
    print("Low Tax Bracket")
elif(salary<=100000):
    print("Middle Tax Bracket")
else:
    print("High Tax Bracket")