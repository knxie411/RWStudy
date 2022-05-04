var f = document.getElementsByClassName("first");
var S = document.getElementsByClassName("second");
var T = document.getElementsByClassName("third");




function Init()
{
    f[0].innerHTML = "🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥<br>🟨🟨🟨🟨🟨🟨🟨🟨🟨<br>🟩🟩🟩🟩🟩🟩🟩<br>🟦🟦🟦🟦🟦<br>🟪🟪🟪<br>⬛️";   

    var ar = []

    ar.push ("🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥<br>");
    ar.push ("🟨🟨🟨🟨🟨🟨🟨🟨🟨<br>");
    ar.push ("🟩🟩🟩🟩🟩🟩🟩<br>")
    ar.push ("🟦🟦🟦🟦🟦<br>")
    ar.push ("🟪🟪🟪<br>")
    ar.push ("⬛️")
}

function Move1()
{
    s[0].innerHTML="";
    document.getElementsByClassName("Second").innerHTML = "ar.pop()";
}