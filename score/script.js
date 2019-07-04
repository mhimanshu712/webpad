

var lim=5;
var first=0;
var second=0;
var lock=0;

var h= document.querySelector("h1");


function oney() {
 if (lock==0) {
	first += 1;
	if (first==lim){
		
		h.innerHtml= "<span class=\"green\">"+first+"</span>"+" to "+second;
		lock=1;

	}else{
		h.innerText=first +" to "+second;
	}
 }
}

function two() {
 if (lock==0) {
	second += 1;
	if (second==lim){
		lock=1;
		h.innerHtml= first+" to "+"<span class=\"green\">"+second+"</span>";

	}else{
		h.innerText=first +" to "+second;
	}
 }
}

function reset(){
	var lim=5;
    var first=0;
    var second=0;
    var lock=0;

}
