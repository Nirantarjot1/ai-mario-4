marioX="";

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	 video=createCapture(VIDEO);
	 video.size(800,400);

	 poseNet=ml5.poseNet(video , modelLoaded);
	 poseNet=poseNet.on('pose' , gotPoses);

	 video.parent('game_console');
}

function modelLoaded(){
	console.log("Model Loaded !");
}

function gotPoses(results){
	if(results.lenght>0){
		console.log(results);
		noseX=results[0].pose.nose.x;
		noseY=results[0].pose.nose.y;
	}
}

function draw() {

	game()

background("#D3D3D3");

if(noseX<300)
{
	marioX=marioX-1;
}
if(noseX>300)
{
	marioX=marioX+1;
}
if(noseY<150)
{
	marioY=marioY-1;
}

image(img,marioX,marioY,40,70);
}






