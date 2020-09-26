let video;
let poseNet;
let pose
let skeleton

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide()
  poseNet = ml5.poseNet(video,modelReady);
  poseNet.on('pose',gotPoses);
}

function draw() {
  image(video,0,0);
  if(pose){
    fill(255,0,0)
    let eyeR = pose.rightEye
    let eyeL = pose.leftEye
    let d = dist(eyeR.x,eyeR.y,eyeL.x,eyeL.y)
    ellipse(pose.nose.x,pose.nose.y,d)
  }
  if(skeleton){
    for(let i =0;i<skeleton.length;i++){
      let a = skeleton[i][0]
      let b = skeleton[i][1]
      strokeWeight(2)
      stroke(50)
      //line(a.position.x,a.position.y,b.position.x,b.position.y)
    }
    
  }
}

function gotPoses(res){
  //console.log(res)
  if(res.length > 0){
    pose = res[0].pose;
    skeleton = res[0].skeleton
  }
}

function modelReady(){
  console.log('ready');
}