var bgmusic = new Howl({
    src:['/sounds/alba.mp3'],
    volume:0.5
});

bgmusic.play();

//Rastify2
rastxrotate=0;

// Create a raster item using the image tag with id='mona'
var rasterx = new Raster({source:'/images/akko1.jpg'});
// Move the raster to the center of the view
rasterx.position = view.center;




// As the web is asynchronous, we need to wait for the raster to load
// before we can perform any operation on its pixels.
rasterx.on('load', function() {
	// Downsize the pixel content to 80 pixels wide and 60 pixels high:
    rasterx.scale(0.5);
    rasterx.rotate(10);
});












// Create a raster item using the image tag with id='mona'
var raster = new Raster({source:'/images/akko2.jpg'});
raster.position = view.center;

// Hide the raster:
raster.visible = false;

// The size of our grid cells:
var gridSize = 8;

// Space the cells by 120%:
var spacing = 1.2;

var rasty=0;
// As the web is asynchronous, we need to wait for the raster to load
// before we can perform any operation on its pixels.
raster.on('load', function() {
	// Since the example image we're using is much too large,
	// and therefore has way too many pixels, lets downsize it to
	// 40 pixels wide and 30 pixels high:
    raster.size = new Size(40, 45);
});



















var keyData = {
    q: {
        sound: new Howl({
        src: ['/sounds/bubbles.mp3']
        }),
        color: '#1abc9c'
    },
    w: {
        sound: new Howl({
        src: ['/sounds/clay.mp3']
        }),
        color: '#2ecc71'
    },
    e: {
        sound: new Howl({
        src: ['/sounds/confetti.mp3']
        }),
        color: '#3498db'
    },
    r: {
        sound: new Howl({
        src: ['/sounds/corona.mp3']
        }),
        color: '#9b59b6'
    },
        t: {
        sound: new Howl({
        src: ['/sounds/dotted-spiral.mp3']
        }),
        color: '#34495e'
    },
    y: {
        sound: new Howl({
        src: ['/sounds/flash-1.mp3']
        }),
        color: '#16a085'
    },
    u: {
        sound: new Howl({
        src: ['/sounds/flash-2.mp3']
        }),
        color: '#27ae60'
    },
    i: {
        sound: new Howl({
        src: ['/sounds/flash-3.mp3']
        }),
        color: '#2980b9'
    },
    o: {
        sound: new Howl({
        src: ['/sounds/glimmer.mp3']
        }),
        color: '#8e44ad'
    },
    p: {
        sound: new Howl({
        src: ['/sounds/moon.mp3']
        }),
        color: '#2c3e50'
    },
    a: {
        sound: new Howl({
        src: ['/sounds/pinwheel.mp3']
        }),
        color: '#f1c40f'
    },
    s: {
        sound: new Howl({
        src: ['/sounds/piston-1.mp3']
        }),
        color: '#e67e22'
    },
        d: {
        sound: new Howl({
        src: ['/sounds/piston-2.mp3']
        }),
        color: '#e74c3c'
    },
    f: {
        sound: new Howl({
        src: ['/sounds/prism-1.mp3']
        }),
        color: '#95a5a6'
    },
    g: {
        sound: new Howl({
        src: ['/sounds/prism-2.mp3']
        }),
        color: '#f39c12'
    },
    h: {
        sound: new Howl({
        src: ['/sounds/prism-3.mp3']
        }),
        color: '#d35400'
    },
    j: {
        sound: new Howl({
        src: ['/sounds/splits.mp3']
        }),
        color: '#1abc9c'
    },
    k: {
        sound: new Howl({
        src: ['/sounds/squiggle.mp3']
        }),
        color: '#2ecc71'
    },
    l: {
        sound: new Howl({
        src: ['/sounds/strike.mp3']
        }),
        color: '#3498db'
    },
    z: {
        sound: new Howl({
        src: ['/sounds/suspension.mp3']
        }),
        color: '#9b59b6'
    },
    x: {
        sound: new Howl({
        src: ['/sounds/timer.mp3']
        }),
        color: '#34495e'
    },
    c: {
        sound: new Howl({
        src: ['/sounds/ufo.mp3']
        }),
        color: '#16a085'
    },
    v: {
        sound: new Howl({
        src: ['/sounds/veil.mp3']
        }),
        color: '#27ae60'
    },
    b: {
        sound: new Howl({
        src: ['/sounds/wipe.mp3']
        }),
        color: '#2980b9'
    },
    n: {
        sound: new Howl({
        src: ['/sounds/zig-zag.mp3']
        }),
        color: '#8e44ad'
    },
    m: {
        sound: new Howl({
        src: ['/sounds/moon.mp3']
        }),
        color: '#2c3e50'
    }
}

var circles = [];

// function that detect a key press
function onKeyDown(event) {
    if (keyData[event.key]) {
            // generate random point
        var maxPoint = new Point(view.size.width, view.size.height);
        var randomPoint = Point.random();
        var point = maxPoint * randomPoint;
        var newCircle = new Path.Circle(point, 300);
        newCircle.fillColor = keyData[event.key].color;
        keyData[event.key].sound.play();
    } else {
        var maxPoint = new Point(view.size.width, view.size.height);
        var randomPoint = Point.random();
        var point = maxPoint * randomPoint;
        var newCircle = new Path.Circle(point, 300);
        newCircle.fillColor = "#F44336";
        keyData["a"].sound.play();	
    }

    // add a new circle to the circles array to draw
    circles.push(newCircle);




    //RastJob
    if(rasty<raster.height){
        for(var rastx=0;rastx<raster.width;rastx++){
            			// Get the color of the pixel:
			var color = raster.getPixel(rastx, rasty);

			// Create a circle shaped path:
			var path = new Path.Circle({
				center: new Point(rastx, rasty) * gridSize,
				radius: gridSize / 2 / spacing
            });
            

			// Set the fill color of the path to the color
            // of the pixel:
            path.fillColor=color;
        }
        rasty += 1;
        
    }

    


}

function onFrame(event) {
    // animate the hue and the scale of circles
    for (var i = 0; i < circles.length; i++) {
        circles[i].fillColor.hue +=1;
        circles[i].scale(.9);
        // delete the dimished circles from the array
        if(circles[i].area < 1){
          circles[i].remove();
          circles.splice(i, 1);
          console.log(circles);
        }
    }
    
}


