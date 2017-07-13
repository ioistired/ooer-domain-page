var pause = undefined;
var play = undefined;

function endstatic()
{
  document.body.style.backgroundImage = "none";
  document.body.style.backgroundColor = "black";
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

pause = document.getElementById("pause");
play = document.getElementById("play");
console.log("load successed");
pause.onclick = onplay;
