function allclear(){
    document.getElementById("textarea").value =" ";
}
function printvalue(input)
{
    document.getElementById("textarea").value += input;
}
function Equal()
{
    let text=document.getElementById("textarea").value;
    if(text[0] =='-')
    {
        text='0'+text;
    }
    let number=text.match(/\d+/g).reverse();
    let operator = document.getElementById("textarea").value;
    let oper = operator.match(/[\+\-\*\/]/g).reverse();
    while(oper.length != 0)
    {
        var total = oper.pop();
        switch(total)
        {
            case '+' :
                    var num1 = parseFloat(number.pop());
                    var num2 = parseFloat(number.pop());
                    number.push(num1 + num2);
            break;
            case '-':
                var num1 = parseFloat(number.pop());
                var num2 = parseFloat(number.pop());
                number.push(num1 - num2);
            break;
            case '*':
                var num1 = parseFloat(number.pop());
                var num2 = parseFloat(number.pop());
                number.push(num1 * num2);
            break;
            case '/':
                var num1 = parseFloat(number.pop());
                var num2 = parseFloat(numberpop());
                number.push(num1 / num2);
            break;
        }
    }
    document.getElementById("textarea").value = number;

}