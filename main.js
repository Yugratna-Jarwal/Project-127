song1="";
song2="";
function preload()
{
    song1=loadSound("harry_potter.mp3");
    song2=loadSound("Imperial March.mp3");
}
function setup()
{
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}
function draw()
{
    image(video,0,0,600,500);
}  