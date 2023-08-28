# Create a function to count the number of vowels in a string.
def vowel(l):
    count=0
    vow="aeiou"
    for i in l:
        if i in vow:
            count+=1
    print(count)
l=["a","e",'i']
vowel(l)
