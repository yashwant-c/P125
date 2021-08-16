noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(500,500);

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}

function draw()
{
    background('#6C91C2');
   
     textSize(difference);
    fill('#FFE787');
    text('Peter',50,400);
    
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);;

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        
    }
}