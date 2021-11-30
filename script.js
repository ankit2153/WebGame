var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var x=canvas.width/2;
var y=canvas.height-20;
var dx=2;
var dy=-2;
var ballRadius=10;
var paddleHeight=10;
var paddleWidth=75;
var paddleeX=(canvas.width-paddleWidth)/2;
var rightPressed=false;
var leftPressed=false;

document.addEventListener("keydown",keyDownHandler,false);
document.addEventListener("keyup",keyUpHandler,false);

function drawBall(){
    ctx.beginPath();
    ctx.arc(x,y,ballRadius,0,Math.PI*2);
    ctx.fillStyle="green";
    ctx.fill();
    ctx.closePath();

}
function drawPaddle(){
    ctx.beginPath();
    ctx.rect(paddleeX,canvas.height-paddleHeight,paddleWidth,paddleHeight);
    ctx.fillStyle="red";
    ctx.fill();
    ctx.closePath();
}
function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawBall();
    drawPaddle();
    x+=dx;
    y+=dy;

    if (x+dx > canvas.width-ballRadius || x+dx<ballRadius) {
        dx=-dx;
       

    }
    if (y+dy>canvas.height -ballRadius || y+dy<ballRadius) {
        dy=-dy;
        
        
    }
    if (rightPressed) {
        paddleeX+=7;
        if (paddleeX+paddleWidth>canvas.width) {
            paddleeX=canvas.width-paddleWidth;
            
        }
        
    }
    else if (leftPressed) {
        paddleeX-=7;
        if (paddleeX<0) {
            paddleeX=0;
            
        }
        
    }
   
    
   
}

function keyDownHandler(e){
    if (e.key=="Right" || e.key=="ArrowRight") {
        rightPressed= true;
        
    }
    else if (e.key="Left"|| e.key=="ArrowLeft") {
        leftPressed=true;

    }
}
function keyUpHandler(e){
    if (e.key=="Right" || e.key=="ArrowRight") {
        rightPressed= false;
        
    }
    else if (e.key="Left" || e.key=="ArrowLeft") {
        leftPressed=false;

    }
}


setInterval(draw,10);

