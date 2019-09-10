var video = document.getElementById('video');
var canvas = document.querySelector('canvas');
var c      = canvas.getContext('2d');
var dataURI;
var capturing = 1; 

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

    if(capturing==1){
        video.pause();
        $('#downloadIcon').css({'display':"block"});
        c.drawImage(video,0,0);
        dataURI = canvas.toDataURL('image/jpeg');
        capturing=0;

    }else{
        $('#downloadIcon').css({'display':'none'});
        video.play();
        capturing=1;
    }

}

function downloadImage(){
    var url = dataURI.replace(/^data:image\/[^;]+/, 'data:application/octet-stream');
    // window.open(url);
    download(url, "camImage.jpeg", "application/octet-stream;base64");

}