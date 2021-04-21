
var currentx;
var currenty;
var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var color="red";
var width_of_line=3;
var width=screen.width;
var new_width=width-50;
var new_height=screen.height-300;
if(width<992){canvas.width=new_width;
canvas.height=new_height;
document.body.style.overflow="hidden"}



canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e){
lastx=e.touches[0].clientX-canvas.offsetLeft;
lasty=e.touches[0].clientY-canvas.offsetTop;}
canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e)
{currentx=e.touches[0].clientX-canvas.offsetLeft;
currenty=e.touches[0].clientY-canvas.offsetTop;
ctx.beginPath(); ctx.strokeStyle = color;ctx.lineWidth=width_of_line;
ctx.moveTo(lastx,lasty);
ctx.lineTo(currentx,currenty);
ctx.stroke(); lastx=currentx;lasty=currenty;}