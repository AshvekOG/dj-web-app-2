song = "";
leftWristX = 0;
leftwristY = 0;
righttwristX = 0;
rightwristY = 0;

function preload()
{
    song = loadSound("music.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function draw() {
    image(video, 0, 0, 600, 500);
    fill("#FF0000");
    stroke("#FF0000");

  if(scoreLeftWrist > 0.2)
    {
    circle(leftWristX,leftWristy,20);
    InNumberleftWristY = Number(leftWristY);
    remove_decimals = floor(InNumberleftWristY);
    volume = remove_decimals/500;
    document.getElementById("volume").innerHTML = "Volume = " + volume;
    song.setVolume(volume);
    }
}

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function gotPoses(results)
{
    if(results.lenght > 0)
        {
            console.log(results);
            scoreLeftWris = results[0].pose.keypoints[9].score;
            console.log("scoreLeftWrist = " + scoreLeftWrist);

            leftWristX = results[0].pose.leftWrist.x;
            leftWristY = results[0].pose.leftWrist.y;
            console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);

            righttWristX = results[0].pose.leftWrist.x;
            righttWristY = results[0].pose.leftWrist.y;
            console.log("rightWristX = " + rightWristX +" righttWristY = "+ rightWristY);
        }
}
