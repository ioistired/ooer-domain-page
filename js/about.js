var pause = undefined;
var play = undefined;
var video = undefined;
var canvas = undefined;

function endstatic()
{
  document.body.style.backgroundImage = "none";
  document.body.style.backgroundColor = "black";
}

function videoloop()
{
    if (video && !video.paused && !video.ended) {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        setTimeout(videoloop, 1000 / 30);
    }
}

function startvid()
{
  play.style.display = "none";
  canvas.style.display = "inline";
  video.play();
}

function onplay(e)
{
  pause.style.display = "none";
  play.style.display = "inline";

  setTimeout(startvid, 5000);
  setTimeout(endstatic, 2000);
}

function reset()
{
  pause.style.display = "inline";
  play.style.display = "none";
  canvas.style.display = "none";

  video.currentTime = 0;
  video.pause();

  var string = "/img/tiled static.gif";
  document.body.style.backgroundImage = "url('" + string + "')";
  document.body.style.backgroundColor = "white";
}

window.onload = function()
{
  pause = document.getElementById("pause");
  play = document.getElementById("play");
  console.log("load successed");
  pause.onclick = onplay;

  video = document.createElement("video");
  video.src = "/Testing video.mp4";
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
//}
