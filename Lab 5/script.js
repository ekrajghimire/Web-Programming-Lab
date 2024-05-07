function add()
{
    var num1=Number(document.getElementById("Number1").value);
    var num2=Number(document.getElementById("Number2").value);
    var re=num1+num2;
    document.getElementById("result").innerHTML="Result="+re;
}
function sub()
{
    var num1=Number(document.getElementById("Number1").value);
    var num2=Number(document.getElementById("Number2").value);
    var re=num1-num2;
    document.getElementById("result").innerHTML="Result="+re;
}
function mul()
{
    var num1=Number(document.getElementById("Number1").value);
    var num2=Number(document.getElementById("Number2").value);
    var re=num1*num2;
    document.getElementById("result").innerHTML="Result="+re;
}
function div()
{
    var num1=Number(document.getElementById("Number1").value);
    var num2=Number(document.getElementById("Number2").value);
    var re=num1/num2;
    document.getElementById("result").innerHTML="Result="+re;
}
    