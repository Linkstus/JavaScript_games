//creates a function called draw
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    drawBricks(); 
    drawBall(); 
    drawPaddle(); 
    collisionDetection(); 
    drawScore();
    drawLives();

    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) { 
        dx = -dx; 
    } 
    if (y + dy < ballRadius) { 
        dy = -dy; 
    } 
    else if (y + dy > canvas.height - ballRadius) {
        if (x > paddleX && x < paddleX + paddleWidth) { 
            dy = -dy; 
        } else {
                lives--;
                if(!lives){
                    alert("GAME OVER");
                    document.location.reload();
                    //clearInterval(interval);
                }else{
                    x = canvas.width/2;
                    y = canvas.height - 30;
                    dx = 2;
                    dy = -2;
                    paddleX = (canvas.width - paddleWidth) / 2;
                }
            }
    }

    if (rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 7;
    } else if (leftPressed && paddleX > 0) {
        paddleX -= 7;
    }

    x += dx;
    y += dy;

    requestAnimationFrame(draw);
}


//allows us to create a loop with parameters (function, interval in miliseconds)
//setInterval(draw, 10);
draw();