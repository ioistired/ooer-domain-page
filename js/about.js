var pause = document.getElementById("pause");
var play = document.getElementById("play");

function endstatic()
{
  body.style.background-image = "none";
}

function startvid()
{
  play.style.visibility = "hidden";
}

function onplay(e)
{
  pause.style.visibility = "hidden";
  play.style.visibility = "visible";

  setTimeout(startvid, 5000);
  setTimeout(endstatic, 2000);
}

pause.onclick = onplay;
