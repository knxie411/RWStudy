var reset = document.getElementById("reset");
var first = document.getElementById("first");
var second = document.getElementById("second");
var third = document.getElementById("third");
var Box1 = document.getElementById("box1");
var Box2 = document.getElementById("box2");
var Box3 = document.getElementById("box3");
var Arr1 = [];
var Arr2 = [];
var Arr3 = [];

var selectArr;


function Init()
{
    Arr1.length = 0;
    Arr2.length = 0;
    Arr3.length = 0;
    
    Arr1.push(document.createTextNode("🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥"));
    Arr1.push(document.createTextNode("🟨🟨🟨🟨🟨🟨🟨🟨🟨"));
    Arr1.push(document.createTextNode("🟩🟩🟩🟩🟩🟩🟩"));
    Arr1.push(document.createTextNode("🟦🟦🟦🟦🟦"));
    Arr1.push(document.createTextNode("🟪🟪🟪"));
    Arr1.push(document.createTextNode("⬛"));
    Draw();
}


function Draw()
{
    while(first.firstChild)
        first.removeChild(first.firstChild);
    while(second.firstChild)
        second.removeChild(second.firstChild);
    while(third.firstChild)
        third.removeChild(third.firstChild);
   
    for(var i = 0; i < Arr1.length; i++)
    {
        first.appendChild(Arr1[i]);
        first.appendChild(document.createElement('br'));
    }
   
    for(var i = 0; i < Arr2.length; i++)
    {
        second.appendChild(Arr2[i]);
        second.appendChild(document.createElement('br'));
    }
  
    for(var i = 0; i < Arr3.length; i++)
    {
        third.appendChild(Arr3[i]);
        third.appendChild(document.createElement('br'));
    }

}

function ClickBox1()
{
 
    if(selectArr != null)
    {
        if(selectArr == Arr1)
        {
            alert("이미 선택되었습니다")
        }
        else
        {
            if(Arr1.length == 0 || Arr1[Arr1.length - 1].length > selectArr[selectArr.length - 1].length)
            {
                Arr1.push(selectArr.pop());
                selectArr = null;
                Draw();
            }
            else
            {
                alert("잘못선택되었습니다")
                selectArr = null;
            }
        }
    }
    else
    {
        if(Arr1.length > 0)
        {
            selectArr = Arr1;
        }
        else
            alert("비어있습니다")
    }
            
}


function ClickBox2()
{
    if(selectArr != null)
    {
        if(selectArr == Arr2)
        {
            alert("이미 선택되었습니다")
        }
        else
        {
            if(Arr2.length == 0 || Arr2[Arr2.length - 1].length > selectArr[selectArr.length - 1].length)
            {
                Arr2.push(selectArr.pop());
                selectArr = null;
                Draw();
            }
            else
            {
                alert("잘못선택되었습니다")
                selectArr = null;
            }
        }
    }
    else
    {
        if(Arr2.length > 0)
        {
            selectArr = Arr2;
        }
        else
            alert("비어있습니다")
    }
}


function ClickBox3()
{
    if(selectArr != null)
    {
        if(selectArr == Arr3)
        {
            alert("이미 선택되었습니다")
        }
        else
        {
            if(Arr3.length == 0 || Arr3[Arr3.length - 1].length > selectArr[selectArr.length - 1].length)
            {
                Arr3.push(selectArr.pop());
                selectArr = null;
                Draw();
            }
            else
            {
                alert("잘못선택되었습니다")
                selectArr = null;
            }
        }
    }
    else
    {
        if(Arr3.length > 0)
        {
            selectArr = Arr3;
        }
        else
            alert("비어있습니다")
    }
}