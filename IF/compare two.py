#Create a program that compares two integers and prints the larger one using an if-else statement.
n1= int(input("Enter The  1st Number :")) 
n2= int(input("Enter The  2nd Number :")) 
if(n1 > n2):
    print("{} is Large Number".format(n1))
else:
    print("{} is Smallest Number".format(n2))