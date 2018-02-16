function woop()
{
var num = 300;
var image = [];
var gif = [];
var div = document.getElementById("whatever");
//console.log(div);
var func = function(gif){gif.play();};

for(var i=0; i<num; ++i)
{
  var div2 = document.createElement("div");
image[i] = new Image();
  if(i<((num/100)*30))
  {
    image[i].src = "img/gaems/kommander/star.gif";
    div2.speed = (5 + Math.round(Math.random())*10);
    div2.type = 10;
  }
  else
  {
    image[i].src = "img/gaems/kommander/star2.gif";
    div2.speed = (5 + Math.round(Math.random())*5);
    div2.type = 5;
  }
  div2.id = "star" + i;
  div2.style.position = "absolute";
  div2.style.left = (div.clientWidth - 5) + "px";
  var top = (div.clientTop + 5) + Math.round(Math.random()*(div.clientHeight-10));
  div2.style.top = top + "px";
  div2.appendChild(image[i]);
  div.appendChild(div2);
  gif[i] = new SuperGif({gif:image[i]});
  gif[i].load();
  gif[i].pause();
  var r = (400*i) + Math.round(Math.random()*1000);
//console.log(r);
window.setTimeout(func.bind(this,gif[i]), r);
}

var movefunc = function()
{
  var div = document.getElementById("whatever");

  for(var i=0; i<num; ++i)
  {
    var star = document.getElementById("star" + i);
    var left = star.style.left;

    var leftnum = parseInt(left.substring(0,left.length-2));

    leftnum -= star.speed;
    if(leftnum <= (div.clientLeft + 5))
    {
      leftnum = div.clientWidth-10;
      var top = (div.clientTop + 5) + Math.round(Math.random()*(div.clientHeight-10));
      star.style.top = top + "px";
      star.speed = (5 + Math.round(Math.random()*star.type));
    }

    star.style.left = leftnum + "px";
  }
}

window.setInterval(movefunc, 20);
