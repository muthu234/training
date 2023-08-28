amount=int(input("Enter The Amount :"))
if amount >=500:
    print(amount//500,'500 Note')
    amount=amount%500

if amount>=100:
    print(amount//100,'100 Note')
    amount=amount%100

if amount >=50:
    print(amount//50,'50 Note')
    amount=amount%50

if (amount<=20 or amount>20):
    print(amount//20,'20 Note')
    amount=amount%20
    print(amount//10,'10 Notes')
    amount=amount%10
    if (amount >=1 and amount<=9):
        print("Take coins For :",amount)    