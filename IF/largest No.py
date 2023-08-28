#Write a program that takes three numbers as input and prints the largest of the three using if-else statements.
a=int(input("Enter The  1st Number :")) 
b=int(input("Enter The  2nd Number :")) 
c=int(input("ENter The 3rd Number :"))
if(a > b and a > c):
    print("{} is Large Number".format(a))
elif(b>c):
    print("{} is Large Number".format(b))
else:
    print("{} is Smallest Number".format(c))