/*
1. document.querySelector("input").value is a string
2. Number(string) function
3. Using a span to update data
4. .addEventListner("click",reset()); did not work
5. Doin if(!gameover){}
6. .addEventListner("change",function(){});

*/

var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("h3 span");
var gameover = false;
var winningScore = 5;

p1Score=0;
p2Score=0;

p1Button.addEventListener("click", function(){
	if (!gameover){
		p1Score++;
		if (p1Score===winningScore){
			p1Display.classList.add("winner");
			gameover=true;
		}
	}
	p1Display.textContent = p1Score;
});

p2Button.addEventListener("click", function(){
	if (!gameover){
		p2Score++;
		if (p2Score===winningScore){
			p2Display.classList.add("winner");
			gameover=true;
		}
	}
	p2Display.textContent = p2Score;
});

resetButton.addEventListener("click",function(){
	reset();
});

function reset(){
	p1Score=0;
	p2Score=0;
	p1Display.textContent=0;
	p2Display.textContent=0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameover=false;
}

numInput.addEventListener("change",function(){
	winningScoreDisplay.textContent=numInput.value;
	winningScore=Number(numInput.value);
	reset();


});
