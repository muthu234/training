# Count the number of vowels in a string.
count =0
a=str(input("Enter The  String :"))
for i in range(len(a)):
     if a[i] == 'a' or a[i] == 'e' or a[i] == 'i' or a[i] == 'o' or a[i] == 'u':
        count+=1
        print(count)   