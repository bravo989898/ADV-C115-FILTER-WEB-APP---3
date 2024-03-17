noseX = 0;
noseY = 0;
change_index = 3;
lipX = 0;
lipY = 0;

function preload(){
    lipstick = loadImage('https://i.postimg.cc/3JDP4rKC/Png-lips-design-free-image-480x480.png');
    mustache = loadImage('https://i.postimg.cc/sgmGprm1/Mustache.png');

}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.position(620, 330);
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("model is intitialized");
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-25;
        noseY = results[0].pose.nose.y-10;
        lipX = noseX;
        lipY = noseY + 15;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}

function change_mustache(){
    change_index = false;
}

function change_lip(){
    change_index = true;
}

function draw()
{
    image(video, 0,0, 300, 300);
    
    if (change_index == false){
        image(mustache, noseX , noseY, 50, 50);
    }
    else if (change_index == true){
        image(lipstick, lipX , lipY, 50, 50);
    }

}

function take_snapshot(){
    if (change_index == false){
        save("My_MUSTACHE_image.jpg")
    }
    else if (change_index == true){
        save("My_LIPSTICK_image.jpg")
    }
    
}