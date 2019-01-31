document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false); 
document.addEventListener("mousemove", mouseMoveHandler, false);

var rightPressed = false;
var leftPressed = false;

function keyDownHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = true;
    } else if (e.keyCode == 37) { 
        leftPressed = true; 
    }
} 

function keyUpHandler(e) {
    if (e.keyCode == 39) { 
        rightPressed = false; 
    } else if (e.keyCode == 37) { 
        leftPressed = false; 
    }
} 

function mouseMoveHandler(e){
    var relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width){
        paddleX = relativeX - paddleWidth/2;
    }
}

var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;


function drawPaddle() {
    ctx.beginPath(); 
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight); 
    ctx.fillStyle = "#0095DD"; 
    ctx.fill();
    ctx.closePath();
}  