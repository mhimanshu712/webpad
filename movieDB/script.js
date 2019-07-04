// 1. its forEach not foreach
// 2. have a look at foreach loop again


var arr = [{name:"Tangled",rating:4.5,seen:true},{name:"Trandformers",rating:4,seen:false},{name:"Iron Man 3",rating:5.1,seen:true}];
arr.push({name:"Kardash",rating:"NA",seen:false});

arr.forEach(function(a){
	if (a.seen==true){
		console.log("You have seen the movie "+a.name+", rated "+a.rating+ ".");
	}else{
		console.log("You have not seen the movie "+a.name+", rated "+a.rating+ ".");
	}
})