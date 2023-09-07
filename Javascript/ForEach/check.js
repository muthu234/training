// Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
a='madyam'
found=false
for(i=0;i<a.length;i++)
{
    if(a[i]=='y')
    {
        found=true;
        break;
    }
}
if(found){
    console.log("Yes");
}
else
    {
        console.log("No");
    }