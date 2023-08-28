# Create a function to calculate the compound interest for a given principal amount, interest rate, and time.
def calculate_compound_interest(p,r,t):
    rate_decimal = r / 100
    compound_interest = p* (1 + rate_decimal)**t- p
    return compound_interest
p=int(input(" Enter The Principal amount :"))
i= int(input("Enter The Interest rate :")) 
t= int(input("Enter The Time period in years :"))
interest = calculate_compound_interest(p,i,t)
print("Compound Interest:", interest)
