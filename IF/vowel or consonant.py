# program to input any alphabet and check whether it is vowel or consonant.
vow="a,e,i,o,u"
l=str(input("Enter The Letter :"))
if l in vow:
    print("vowel")
else:
    print("Not vowel")