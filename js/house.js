var pause = undefined;
var play = undefined;
var video = undefined;
var canvas = undefined;
var tapesound = undefined;
var staticsound = undefined;

function endstatic()
{
	document.body.style.backgroundImage = "none";
	document.body.style.backgroundColor = "black";

	staticsound.pause();
}

function videoloop()
{
		if (video && !video.paused && !video.ended) {
				context.drawImage(video, 0, 0, canvas.width, canvas.height);
				requestAnimationFrame(videoloop);
		}
}

function startvid()
{
	canvas.style.display = "inline";
	video.play();
}

function playoff()
{
	play.style.display = "none";
}
function houseaway()
{
TopHouse.style.display = "none";
Door.style.display = "none";
}
function finaltrans()
{Door.classList.add("openup");
 Door.classList.remove("hmmyesthisfloorismade");
 Door.classList.remove("wakethefup");
 Door.style.filter = "saturate(105%)brightness(135%)";
 TopHouse.classList.add("openup");
 TopHouse.classList.remove("hmmyesthisfloorismade");
 TopHouse.classList.remove("wakethefup");
 TopHouse.style.filter = "saturate(105%)brightness(135%)";
 Sky.style.display = "none";
}
function startsound()
{
	tapesound.play();
}

function onplay(e)
{
	var TopHouse = document.getElementById("TopHouse");
	var Sky = document.getElementById("Sky");
	var Door = document.getElementById("Door");
	pause.style.display = "none";
	play.style.display = "inline";
   	Sky.classList.add("wakethefup");
   	TopHouse.classList.add("wakethefup");
	TopHouse.classList.add("hmmyesthisfloorismade");
	Door.classList.add("wakethefup");
	Door.classList.add("hmmyesthisfloorismade");
// Sandboxing door tweens, they will need to be converted to be used alongside other css rules.
// Apply class at your own risk
//	Door.classList.add("openup");
//
	Door.style.zIndex = "100";
	setTimeout(playoff, 7000);
	setTimeout(houseaway, 12000);
	setTimeout(finaltrans, 9000);
	setTimeout(startvid, 5000);
	setTimeout(endstatic, 2000);
	setTimeout(startsound, 1000);
}

function reset()
{
//	pause.style.display = "inline";
	play.style.display = "none";
	canvas.style.display = "none";

	video.currentTime = 0;
	video.pause();

	tapesound.currentTime = 0;
	tapesound.pause();

 	staticsound.play();

	var string = "/img/tiled static.gif";
	document.body.style.backgroundImage = "url('" + string + "')";
	document.body.style.backgroundColor = "white";
}

window.onload = function()
{
	pause = document.getElementById("door");
	play = document.getElementById("play");
	console.log("load successed");
	pause.onclick = onplay;

	tapesound = document.createElement("audio");
	tapesound.src = "/tapefeed.mp3";
	tapesound.pause();

	staticsound = document.createElement("audio");
	staticsound.src = "https://omaniamnotgoodwith.computer/audio/OurMoreMuffledHouse.mp3";
	staticsound.loop = true;
	staticsound.play();

	video = document.createElement("video");
	video.src = "https://oman.imjake.me/OurHouse.mp4";
	video.pause();
	video.addEventListener('play',function(){
		videoloop();
	},false);
	video.addEventListener('ended',function(){
		reset();
	},false);

	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");

	canvas.width = canvas.clientWidth;
	canvas.height = canvas.clientHeight;

	context.clearRect(0, 0, canvas.width, canvas.height);
}
