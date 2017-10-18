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

var query = parseQuery(window.location.hash);

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
  audio.src = "audio/lang/SCOTscotlandforever.mp3";
  audio.loop = true;
  audio.play();
  
  var div = document.createElement("div");
  div.innerHTML = '<img src="/img/lang/SCOTFlag.png" id="ImageOverlay">'
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

  var div = document.createElement("div");
  div.innerHTML = '<img src="/img/lang/USFlag.png" id="ImageOverlay">'
  document.body.appendChild(div);
  var source = [];
  source[0] = "audio/lang/USBrother/Brother1";
  source[1] = "audio/lang/USBrother/Brother2";
  source[2] = "audio/lang/USBrother/Brother3";
  source[3] = "audio/lang/USBrother/Brother4";
  source[4] = "audio/lang/USBrother/Brother5";
  source[5] = "audio/lang/USBrother/Brother6";
  source[6] = "audio/lang/USBrother/Brother7";
  source[7] = "audio/lang/USBrother/Brother8";
  source[8] = "audio/lang/USBrother/Brother9";
  source[9] = "audio/lang/USBrother/Brother10";
  
  var audio = [];
  for(var i=0;i<10;++i)
  {
    audio[i] = document.createElement("audio");
    audio[i].src = source[i];
    audio[i].pause();
  }

  var hoverfunc = function(){
    audio[Math.random()*10].play();
  }

  document.getElementById("first").onmouseover = hoverfunc;
}

