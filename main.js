 difference=0
 rightWristX=0;
 leftWristX=0;
 function setup() {
    video= createCapture(VIDEO);
    video.size(550,500);

    canvas= createCanvas(550,550);
    canvas.position(560,150);
    poseNet =ml5.poseNet(video,modelLoad);
    poseNet.on('pose',gotPoses);
}

function draw()
{
    background('#969A97');
    textSize(32);
    fill(0, 102, 153);
    text('SOHAM',10,90);
    document.getElementById("font_size").innerHTML = "Font size of the text will be = " + difference +"px";
}

function modelLoad() {
    console.log('poseNet is intialized!');
}

function gotPoses(results) 
{
    if(results.length>0)
    {
        console.log(results);

        leftWristx=results[0].pose.leftWrist.x
        rightWristx=results[0].pose.rightWrist.x
        differrence= floor(leftWristx - rightWristx);

        console.log("leftWristX= " + leftWristX + " rightWristX = "+ rightWristX + " difference = " + difference)
        
    }
}
