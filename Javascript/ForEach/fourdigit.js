// Write a program that will allow someone to guess a four-digit pin exactly 4 times. If the user guesses the number correctly. It prints “That was correct!” Otherwise, it will print “Sorry that was wrong.” Program stops after the 4th attempt if they got it right.
a=[2222,3333,4444,5555,6666];
e='2222';
found=false;
for(var i=0;i<a.length;i++)
{
    if (a[i]==e)
    {
        found=true;
        console.log("That was correct!");
       break;
    }
    if(!found)
    {
        console.log("Sorry that was wrong.");
    }
}