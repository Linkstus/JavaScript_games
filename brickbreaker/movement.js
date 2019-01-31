var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//variables to allow our (x,y) to change 
var x = canvas.width / 2;
var y = canvas.height - 30;

//variables to allow us to give movement to our ball
var dx = 2;
var dy = -2;

//allows us to keep track of the ball radius for collision
var ballRadius = 10;

function drawBall() {
    ctx.beginPath(); 
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2); 
    ctx.fillStyle = "#0095DD"; 
    ctx.fill();
    ctx.closePath();
} 

