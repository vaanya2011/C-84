canvas = document.getElementById("my_canvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;
background_img="mars.jpg";
rover_img="rover.png";
function add(){
    background_Imgtag=new Image();
    background_Imgtag.onload= upload_bg;
    background_Imgtag.src=background_img;
    rover_Imgtag=new Image();
    rover_Imgtag.onload=upload_rover;
    rover_Imgtag.src=rover_img;
}
function upload_bg(){
    ctx.drawImage(background_Imgtag, 0, 0, canvas.width, canvas.height);
}
function upload_rover(){
    ctx.drawImage(rover_Imgtag, rover_x, rover_y, rover_width, rover_height);

}
