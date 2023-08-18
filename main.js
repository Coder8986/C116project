function preload() {
  mustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png")  
}

nose_x = 0;
nose_y = 0;

function draw() {
    image(video, 0, 0, 500, 400);
    image(mustache, nose_x - 25, nose_y , 50, 30);

}

function setup(){
    canvas = createCanvas(500,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500,400)
    video.hide();
    

    PoseNet = ml5.poseNet(video, ModelLoaded);
    PoseNet.on("pose", gotposes);
}

function ModelLoaded(){
    console.log("ModelLoaded");
}

function gotposes(result) {
    if (result.length > 0) {
        console.log(result);
        console.log("nose x =" + result[0].pose.nose.x);
        console.log("nose y =" + result[0].pose.nose.y);
        nose_x = result[0].pose.nose.x;
        nose_y = result[0].pose.nose.y;
    }
}

function Take_snapshot(){
    save("img.png");
}


