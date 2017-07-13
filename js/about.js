var pause = document.getElementById("pause");
var play = document.getElementById("play");

function endstatic()
{
  body.style.background-image = "none";
}

function startvid()
{
  play.style.display = "none";
}

function onplay(e)
{
  pause.style.display = "none";
  play.style.display = "inline";
  console.log("Play successed");
  setTimeout(startvid, 5000);
  setTimeout(endstatic, 2000);
}

pause.onclick = onplay;
