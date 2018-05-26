var pause = undefined;
var play = undefined;
var audio = undefined;
var tapesound = undefined;
// var staticsound = undefined;

function endstatic()
{
document.body.style.backgroundImage = "none";
document.body.style.backgroundColor = "white";

//staticsound.pause();
}

function startmusic()
{
audio.play();
}

function startsound()
{
tapesound.play();
rude.style.display = "none";
curvebox.style.display = "none";
spun.style.display = null;
}

function onplay(e)
{
var curvebox = document.getElementById("curvebox");
var rude = document.getElementById("rude");
var spun = document.getElementById("spun");
curvebox.classList.add("getmeinofhere");
rude.classList.add("getmeoutofhere");
rude.style.display = null;
setTimeout(startmusic, 5000);
setTimeout(endstatic, 2000);
}

function reset()
{
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
var button = document.getElementById("OHGODWORK");
button.onclick = onplay;

console.log("load successed");
tapesound = document.createElement("audio");
tapesound.src = "/tapefeed.mp3";
tapesound.pause();

audio = document.createElement("audio");
audio.src = " https://oman.imjake.me/LawBreaker.mp3 ";
audio.pause();
audio.addEventListener('ended',function(){
	reset();
	},false);
}
