// Defining The Basic variables
const take_selfie_btn = document.getElementById("take_selfie");
var getImg;
var video;
var poseNet;
var noseX = 0;
var noseY = 0;
var img;

// Function preload
function preload() {
    console.log('Preload');
    img = loadImage('https://i.postimg.cc/503RGB4W/clown-removebg-preview.png');
}
// Function setup
function setup(){
    // Defining Canvas
    let canvas = createCanvas(700, 400);
    canvas.position(355, 200);

    // Accessing the webcam
    video = createCapture(VIDEO);
    video.size(700, 400);
    video.hide()

    // Initializing poseNet
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPose)
}

// Function model loaded
function modelLoaded(){
    console.log('Model loaded');
}

function gotPose(results){
    if(results.length > 0) {
        console.log(results)
        // Consoling the x and y of nose

        // Setting the value of nosex and noseY
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        
        console.log(`Nose X Is ${noseX}`);
        console.log(`Nose Y Is ${noseY}`);
    }
}

function draw(){
    image(video, 0, 0, 700, 400);
    image(img, (noseX - 20), noseY, 40, 30)
}
take_selfie_btn.addEventListener('click', e => {
    save('joker.png')
});