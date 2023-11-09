Canvas = document.getElementById("myCanvas");
ctx = Canvas.getContext("2d");

var mouseEvent = "empty";



color = "red";
widthOfLine = 5;
radius = 20;

Canvas.addEventListener("mousedown", my_mousedown)
function my_mousedown(e)
{
    color = document.getElementById("Color_input").value;
    widthOfLine = document.getElementById("widthOfLine").value;
    radius = document.getElementById("Radius_input").value;
    mouseEvent = "mousedown";
}

Canvas.addEventListener("mousemove", my_mousemove)
function my_mousemove(e)
{
    current_position_x = e.clientX - Canvas.offsetLeft;
    current_position_y = e.clientY - Canvas.offsetTop;
    
    if(mouseEvent == "mousedown")
    {
        console.log("Posicion actual de X =" + current_position_x + " Y = " + current_position_y );
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthOfLine;
        ctx.arc(current_position_x, current_position_y, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
}