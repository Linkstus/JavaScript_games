//creates a variable to store the canvas
var canvas = document.getElementById("myCanvas");

//stores the tools to 2d rendering to use later
var ctx = canvas.getContext("2d");

//begins instructions
ctx.beginPath();

//builds a rectangle
ctx.rect(20, 40, 100, 100);

//stores the color
ctx.fillStyle = "#FF0000";

//paints the rectangle based on the previous code
ctx.fill();

//ends instructions
ctx.closePath();

//begins instructions
ctx.beginPath();

//builds a circle
//false for clockwise, true for counter 
ctx.arc(240, 160, 20, 0, Math.PI * 2, false);

//stores the color 
ctx.fillStyle = "green";

//uses the color from the previous method
ctx.fill();

//ends instructions
ctx.closePath();

//begins instructions
ctx.beginPath();

//draws a rect
ctx.rect(160, 10, 50, 40);

//stores the color
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";

//colors the stroke of the rect
ctx.stroke();

//ends instructions
ctx.closePath();