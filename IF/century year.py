#Implement a program that checks if a given year is a century year (ending with "00") using if-else statements.
year=int(input("Enter The Year :"))
if (year%100==0):
    print("Century Year")
else:
    print("Not Century Year")