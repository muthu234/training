# Implement a function to check if a string contains only digits.
def digits(input_str):
    for char in input_str:
        if char < '0' or char > '9':
            return False
    return True
string1 = "12345"
string2 = "abc123"
print(digits(string1))  
print(digits(string2))
