var audio = undefined;

function parseQuery(q)
{
  var stage1 = q.slice(1).split("&");

  var stage2 = [];
  var stage3 = {};
  for(var i=0;i<stage1.length;++i)
  {
    stage2[i] = stage1[i].split("=");
    stage3[stage2[i][0]] = stage2[i][1];
  }

  return stage3;
}

var query = parseQuery(window.location.search);

if(query.lang == "scottish")
{
  var head  = document.getElementsByTagName('head')[0];
  var link  = document.createElement('link');
  link.rel  = 'stylesheet';
  link.type = 'text/css';
  link.href = '/css/lang/Scot.css';
  link.media = 'all';
  head.appendChild(link);

  var audio = document.createElement("audio");
  audio.src = "audio/scot.mp3";
  audio.loop = true;
  audio.play();
  
  var div = document.createElement("div");
  div.innerHTML = '<img src="/img/Scotland Forever.png" id="ImageOverlay">'
  document.body.appendChild(div);
}
  else if(query.lang == "us")
{
  var head  = document.getElementsByTagName('head')[0];
  var link  = document.createElement('link');
  link.rel  = 'stylesheet';
  link.type = 'text/css';
  link.href = '/css/lang/us.css';
  link.media = 'all';
  head.appendChild(link);

  var source = [];
  source[0] = "";
  source[1] = "";
  source[2] = "";
  source[3] = "";
  source[4] = "";
  source[5] = "";
  source[6] = "";
  source[7] = "";
  source[8] = "";
  source[9] = "";

  var audio = [];
  for(var i=0;i<10;++i)
  {
    audio[i] = document.createElement("audio");
    audio[i].src = source[i];
    audio[i].pause();

  var hoverfunc = function(){
    audio[Math.random()*10].play();
  }

  document.getElementById("name").onmouseover = hoverfunc;
}

