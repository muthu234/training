# Write a program that takes a person's credit score as input and prints "Poor Credit" if the credit score is below 600, "Fair Credit" if the credit score is between 600 and 699, "Good Credit" if the credit score is between 700 and 799, and "Excellent Credit" if the credit score is 800 or higher.
score=int(input("Enter The Score :"))
if (score<600):
    print("Poor Credit")
elif(score<600 and score <699):
    print("Fair Credit")

elif(score<700 and score <799):
    print("Good Credit")
else:
    print("Excellent Credit")