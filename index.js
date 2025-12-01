const canvasHouse =document.getElementById("myCanvas");
const ctx = canvasHouse.getContext("2d");

let x =40;


function animate(){
    ctx.clearRect(0,0, canvasHouse.width, canvasHouse.height);
    
    // House body
    ctx.fillStyle = "lightgray";
    ctx.fillRect(150, 150, 300, 200);

    
    // Roof
    ctx.beginPath();
    ctx.moveTo(150, 150);
    ctx.lineTo(300, 50);
    ctx.lineTo(450, 150);
    ctx.closePath();
    ctx.fillStyle = "brown";
    ctx.fill();

    
    // Door
    ctx.fillStyle = "saddlebrown";
    ctx.fillRect(270, 230, 60, 120);

    
    // Left circular window
    ctx.beginPath();
    ctx.arc(220, 210, 25, 0, Math.PI * 2);
    ctx.fillStyle = "skyblue";
    ctx.fill();


    
    // Right circular window
    ctx.beginPath();
    ctx.arc(380, 210, 25, 0, Math.PI * 2);
    ctx.fillStyle = "skyblue";
    ctx.fill();

    requestAnimationFrame(animate);
}
animate();



const ballCanvas = document.querySelector("#ballCanvas");
const ballCtx = ballCanvas.getContext("2d");
let y = 50;
let speed = 4;
let radius =25;


function bounceBall(){
    ballCtx.clearRect(0,0,ballCanvas.width, ballCanvas.height);

    ballCtx.beginPath();
    ballCtx.arc(y, ballCanvas.height/4,radius,0,Math.PI*2);
    ballCtx.fill();

    y +=speed;
    if (y +radius >= ballCanvas.width){
        speed= -speed;
        ballCtx.fillStyle= "red";
    }
    if(y- radius<= 0){
        speed = -speed
        ballCtx.fillStyle= "blue";
    }
    // if(x==200){
    //     ctx.fillStyle="green";
    // }
    requestAnimationFrame(bounceBall);
}
bounceBall();







// ctx.beginPath(); //start new path
// ctx.moveTo(20,20);//moves the pen to the starting point, 20,20
// ctx.lineTo(150,100); //draws a line from 20 to 20 to 150 to 100
// ctx.stroke();
// ctx.fillyStle = "red";
// ctx.fillRect(50 , 50 , 100 , 50);
 