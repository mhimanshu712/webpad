

// Create a centered text item at the center of the view:
var text = new PointText({
	point: view.center,
	content: 'Click here to focus and then press some keys.',
	justification: 'center',
	fontSize: 15
});

function onKeyDown(event) {
    var maxPoint = new Point(view.size.width,view.size.height);
    
    //This is like Math.random()
    var randomPoint = Point.random();
    var nwPoint = randomPoint * maxPoint;


	var myCircle = new Path.Circle(new Point(nwPoint), 50);
    myCircle.fillColor = 'purple';
}