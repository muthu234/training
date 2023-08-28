# program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade
percentage=int(input("Enter The Number : "))
if (percentage>=90):
    print("Grade A")
elif(percentage>=80):
    print("Grade B")
elif(percentage>=70):
    print("Grade C")
elif(percentage>=60):
    print("Grade D")
elif(percentage>=40):
    print("Grade E")
else:
    print("Grade F")