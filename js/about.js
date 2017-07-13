var pause = document.getElementById("pause");
var play = document.getElementById("play");

function endstatic()
{
  body.style.backgroundImage = "none";
}

function startvid()
{
  play.style.display = "none";
}

function onplay(e)
{
  pause.style.display = "none";
  play.style.display = "block";
  console.log("Play successed");
  setTimeout(startvid, 5000);
  setTimeout(endstatic, 2000);
}

pause.onclick = onplay;
