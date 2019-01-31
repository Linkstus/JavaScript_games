var lives = 3;

function drawLives(){
    ctx.font = "Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Lives: " + lives, canvas.width - 65, 20);
}