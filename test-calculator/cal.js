function printText(input) 
{
    document.getElementById("out").value += input;
}
function printText1()  
{
    document.getElementById("out").value = "";
}
function getinput()
{
    let text = document.getElementById("out").value;
    if(text[0] == '-'){
        text = '0'+ text;
    }
    let numbers = text.match(/\d+/g).reverse();
    
    let operator = document.getElementById("out").value;
    let opr = operator.match(/[\+\-\*\/]/g).reverse();
    

    while(opr.length != 0)
    {
        var oprr = opr.pop();
        switch(oprr)
        {
            case '+' :
                    var num1 = parseFloat(numbers.pop());
                    var num2 = parseFloat(numbers.pop());
                    numbers.push(num1 + num2);
            break;
            case '-':
                var num1 = parseFloat(numbers.pop());
                var num2 = parseFloat(numbers.pop());
                numbers.push(num1 - num2);
            break;
            case '*':
                var num1 = parseFloat(numbers.pop());
                var num2 = parseFloat(numbers.pop());
                numbers.push(num1 * num2);
            break;
            case '/':
                var num1 = parseFloat(numbers.pop());
                var num2 = parseFloat(numbers.pop());
                numbers.push(num1 / num2);
            break;
        }
    }
    document.getElementById("out").value = numbers;
}
function del()
{
    var textbox = document.getElementById("out");
    textbox.value = textbox.value.slice(0,-1);
}