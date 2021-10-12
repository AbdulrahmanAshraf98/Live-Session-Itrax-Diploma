var input1=document.getElementById("number-1");
var input2=document.getElementById("number-2");
var operation=document.getElementById("o");
var calculate=document.getElementById("calcu");
var result=document.getElementById("resualt");

calculate.onclick=function(){
    var number1=parseFloat(input1.value);
    var number2=parseFloat(input2.value);
    if(operation.value=="+")
    {
        number1*=10;
        number2*=10;
        result.innerText= (number1+number2)/10;
    }
    else if(operation.value=="-")
    {
        number1*=10;
        number2*=10;
        result.innerText= (number1-number2)/10;
    }
    else if(operation.value=="*")
    {
        result.innerText= (number1*number2);
    }
    else if(operation.value=="/")
    {
        result.innerText= (number1/number2);
    }
}