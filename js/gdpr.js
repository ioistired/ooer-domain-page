var pause = undefined;
var play = undefined;
var audio = undefined;
var canvas = undefined;
var tapesound = undefined;
// var staticsound = undefined;

function endstatic()
{
	document.body.style.backgroundImage = "none";
	document.body.style.backgroundColor = "black";

//	staticsound.pause();
}

function audioloop()
{
		if (audio && !audio.paused && !audio.ended) {
				context.drawImage(audio, 0, 0, canvas.width, canvas.height);
				requestAnimationFrame(audioloop);
		}
}

function startmusic()
{
	canvas.style.display = "inline";
	audio.play();
}

function playoff()
{
	play.style.display = "none";
}

function startsound()
{
	tapesound.play();
}

function onplay(e)
{

	setTimeout(playoff, 7000);
	setTimeout(startmusic, 5000);
	setTimeout(endstatic, 2000);
	setTimeout(startsound, 1000);
}

function reset()
{
	canvas.style.display = "none";

	audio.currentTime = 0;
	audio.pause();

	tapesound.currentTime = 0;
	tapesound.pause();

 // staticsound.play();

	var string = "/img/tiled static.gif";
	document.body.style.backgroundImage = "url('" + string + "')";
	document.body.style.backgroundColor = "white";
}

window.onload = function()
{
	 var button = getElementById("OHGODWORK"); button.onclick = onplay;
	console.log("load successed");
	tapesound = document.createElement("audio");
	tapesound.src = "/tapefeed.mp3";
	tapesound.pause();

//	staticsound = document.createElement("audio");
//	staticsound.src = "";
//	staticsound.loop = true;
//	staticsound.play();

	audio = document.createElement("audio");
	audio.src = "http://oman.imjake.me/LawBreaker.mp3";
	audio.pause();
	audio.addEventListener('play',function(){
		audioloop();
	},false);
	audio.addEventListener('ended',function(){
		reset();
	},false);

	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");

	canvas.width = canvas.clientWidth;
	canvas.height = canvas.clientHeight;

	context.clearRect(0, 0, canvas.width, canvas.height);
}
