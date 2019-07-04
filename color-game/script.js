var squares = document.querySelectorAll(".square");
var colorDispaly = document.querySelector("#colorDispaly")
var color= [];
var clickedColor;
var selectedColor;


function fillColor(arr,num){
	for(;num>=0;num--){
		var r=(Math.floor(Math.random()*257));
		var g=(Math.floor(Math.random()*257));
		var b=(Math.floor(Math.random()*257));

		arr.push("rgb("+r+", "+g+", "+g+")");

	}

}



function colorDiv(arr,sqr,num){
	sqr.forEach(function(tp){
		tp.style.backgroundColor=color[num];
		tp.addEventListener("click",function(){
			clickedColor=this.style.backgroundColor;
			this.style.backgroundColor="black";
			if (clickedColor==color[selectedColor]){
				alert("Yo won");
				startGame(6);
			}

		});
		num--;

	});

}

function startGame(count){
selectedColor=Math.ceil(Math.random()*6);
fillColor(color,5);
colorDiv(color,squares,5);
document.querySelector("#colorDisplay").textContent=color[selectedColor];
}

startGame(6);

