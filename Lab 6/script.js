function add()
{
    var input = document.getElementsByName('gender'); 
    for (var i = 0; i < input.length; i++) { 
        if (input[i].checked)
        var a = input[i].value;
    }
        var b= document.getElementById("mobile").value;
        var c= document.getElementById("email").value;
        var d= document.getElementById("city").value;
        var e= document.getElementById("state").value;
        var f= document.getElementById("country").value;
        window.document.location='./details.html'+'?Name='+document.getElementById("uname").value+'&'+'Gender='+a+'&Mobile='+b+'&Email='+c+'&City='+d+'&State='+e+'&Country='+f;
    } 
    