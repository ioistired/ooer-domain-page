var pause = undefined;
var play = undefined;

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
  play.style.display = "inline";

  setTimeout(startvid, 5000);
  setTimeout(endstatic, 2000);
}

document.body.onload = function()
{
  pause = document.getElementById("pause");
  play = document.getElementById("play");
  console.log("load successed");
  pause.onclick = onplay;
}

