# Create a function to find the LCM (least common multiple) of two numbers.
def lcm(a, b):
    max_num = max(a, b)
    while True:
        if max_num % a == 0 and max_num % b == 0:
            lcm = max_num
            break
        max_num += 1
    return lcm
a=int(input("Enter The First No :"))
b=int(input("Enter The Second No :"))
lcm_result = lcm(a,b)
print("LCM:", lcm_result)
