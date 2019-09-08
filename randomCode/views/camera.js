var video = document.getElementById('video');
var canvas = document.getElementById('#canvas');


if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Not adding `{ audio: true }` since we only want video now
    const constraints={
        video: { facingMode: "user" }
          };
    navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
        //video.src = window.URL.createObjectURL(stream);
        video.srcObject = stream;
        video.play();
    });
}

function camerachange(){
    const constraints={
        video: { facingMode: { exact: "environment" } }
        
          };
    navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
        video.srcObject = stream;
        video.play();
    });
}

function captureImage(){
    $('.iconb').toggleClass('outline');
    video.pause();
    $('#downloadIcon').css({'display':"block"});
    
}