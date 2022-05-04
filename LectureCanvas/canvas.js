var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

class player{
    constructor(x,y,radious,color)          //생성자 
    {
        this.posX= x;
        this.posY= y;
        this.radious = radious;
        this.color = color;
    }
    drow()
    {
    context.arc(this.posX,this.posY,this.radious,0,2*Math.PI)   
    context.fillStyle=this.color;
    context.fill();
    }
}
var p = new player(100,100,30,'blue');
p.drow();


//class bullit{
  //  constructor(x,y,radious,color) 
   //{
//        this.posX= x;
 //       this.posY= y;
  //      this.radious = radious;
   //     this.color = color;
    //}
//    drow()
//    {
    //canvas.onclick = function(event)
//    {
	//context.arc(event.x, event.y, 15, 0, Math.PI*2, true);
	//context.closePath();
    //context.fillStyle='red';
	//context.fill();
    //}
    //}
//}

//var b = new bullit();
//b.drow()

canvas.onclick = function(event)
{
    const XX = event.clientX - context.canvas.offsetLeft; 
    const YY = event.clientY - context.canvas.offsetTop;   
    context.arc(XX,YY,5,0,2*Math.PI);
    context.closePath();
    context.fillStyle='red';
    context.fill();
}