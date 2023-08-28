# Write a function that finds the maximum value in a list of numbers.
def maxi(num):
    if num:
        max= num[0]
        for i in num:
            if i > max:
                max = i
                print("The maximum value :", max)
num=[10,200,5,6,7]
maxi(num)