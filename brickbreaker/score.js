var score = 0;

function drawScore(){
    ctx.font = "Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: " + score, 8, 20);
}