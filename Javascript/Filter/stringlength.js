// Write a function that takes an array of strings and returns a new array with only the strings that have a length greater than a given amount. Use the filter method to accomplish this.
function string_length(strings,a)
{
    return strings.filter(str=>str.length>a);
}
arr=["apple", "banana", "cherry", "date", "elderberry"];
fin=string_length(arr,5);
console.log(fin);
