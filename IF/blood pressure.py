# Write a program that takes a person's blood pressure as input and prints "Normal" if the systolic blood pressure is below 120 and the diastolic blood pressure is below 80, "Elevated" if the systolic blood pressure is between 120 and 129 and the diastolic blood pressure is below 80, "Stage 1 Hypertension" if the systolic blood pressure is between 130 and 139 or the diastolic blood pressure is between 80 and 89, and "Stage 2 Hypertension" if the systolic blood pressure is 140 or higher or the diastolic blood pressure is 90 or higher.
blood =int(input("Enter The blood pressure :"))
if(blood<=120):
    print("Normal")
elif(blood>=120 and blood<=129):
    print("Elevated")
elif(blood>=130 and blood<=139):
    print("Stage 1 Hypertension")
else:
    print("Stage 2 Hypertension")