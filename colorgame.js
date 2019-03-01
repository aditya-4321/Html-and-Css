
/*var num = 6;*/
var num=6;
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");
// //selecting easy or hard game
easybtn.addEventListener("click",function(){
	button.textContent="New Colors";
	num=3;
	message.textContent=null;
	hardbtn.classList.remove("selected");
	easybtn.classList.add("selected");
	colors=generateRandomColor(num);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.background=colors[i];
		}
	   else{
	        squares[i].style.display="none";
	}
	}
});
hardbtn.addEventListener("click",function(){
	button.textContent="New Colors";
	num=6;
	message.textContent=null;
	easybtn.classList.remove("selected");
	hardbtn.classList.add("selected");
	colors=generateRandomColor(num);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
			squares[i].style.background=colors[i];
	        squares[i].style.display="block";
	
	}

});
var colors =generateRandomColor(num);
// 	"rgb(255, 0, 0)",
// 	"rgb(255, 255, 0)",
// 	"rgb(0, 255, 0)",
// 	"rgb(255, 0, 255)",
// 	"rgb(0, 0, 255)",
// 	"rgb(0, 255, 255)"];
var h1=document.querySelector("h1");
//Selecting color
var pickedColor= pickColor();
var message=document.querySelector("#message");
var colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.textContent=pickedColor;

var squares= document.querySelectorAll(".square");
//reset
var button=document.querySelector("button");

button.addEventListener("click",function(){
//the reason we need to redefinbutton.textContent="New Colors";e colors variable is because once we state the colors array it won't change again but we want it to change so we declared it once again.
	button.textContent="New Colors";
	colors=generateRandomColor(num);
	message.textContent=null;
	h1.style.background="steelblue";
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(i=0;i<squares.length;i++){
		squares[i].style.background=colors[i];

	}

});








for(i=0;i<squares.length;i++){
	squares[i].style.background=colors[i];

squares[i].addEventListener("click",function(){
	var clickColor=this.style.background;
	console.log(clickColor,pickedColor);
	if(this.style.background === pickedColor){
		message.textContent="Correct!";

		changeColors(pickedColor);
		h1.style.background=clickColor;
		button.textContent="play Again?"
		}
	else{
		message.textContent="Try Again!";
		this.style.background="#232323";
	}

	function changeColors(color){
		for(var i=0;i<squares.length;i++){
			squares[i].style.background=color;
		}
	}
});
}
function pickColor(){
	Rnocolor=Math.floor(Math.random()*colors.length);
	return colors[Rnocolor];
}
function generateRandomColor(n){
	var arr = [];
	for(var i=0;i < n; i++){
		arr.push(randomColor());
	}
	return arr;
}
function randomColor(){
	for(var i=0;i<6;i++){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
}

