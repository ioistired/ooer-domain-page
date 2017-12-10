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
  source[0] = "audio/lang/USBrother/Brother1.mp3";
  source[1] = "audio/lang/USBrother/Brother2.mp3";
  source[2] = "audio/lang/USBrother/Brother3.mp3";
  source[3] = "audio/lang/USBrother/Brother4.mp3";
  source[4] = "audio/lang/USBrother/Brother5.mp3";
  source[5] = "audio/lang/USBrother/Brother6.mp3";
  source[6] = "audio/lang/USBrother/Brother7.mp3";
  source[7] = "audio/lang/USBrother/Brother8.mp3";
  source[8] = "audio/lang/USBrother/Brother9.mp3";
  source[9] = "audio/lang/USBrother/Brother10.mp3";
  source[10] = "audio/lang/USBrother/Brother11.mp3";
  source[11] = "audio/lang/USBrother/Brother12.mp3";
  source[12] = "audio/lang/USBrother/Brother13.mp3";
  var audio = [];
  for(var i=0;i<12;++i)
  {
    audio[i] = document.createElement("audio");
    audio[i].src = source[i];
    audio[i].pause();
  }

var hoverlist = {};
  
  var hoverfunc = function(e){
var oldhover = hoverlist[this.id];
if(oldhover)
{
oldhover();
}

audio[Math.floor(Math.random()*12)].play();
  }
  
  var list = document.getElementsByTagName("a");
  for(var i=0;i<list.length;++i)
  {
  hoverlist[list[i].id] = list[i].onmouseover;
  list[i].onmouseover = hoverfunc;
  }


  var list = document.getElementsByTagName("a");
  for(var i=0;i<list.length;++i)
  {
  list[i].onmouseover = hoverfunc;
  }

}

