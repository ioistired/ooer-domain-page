var parser = document.createElement('a');
parser.href = "http://example.com:3000/pathname/?search=test&hello=world#hash";

parser.protocol; // => "http:"
parser.hostname; // => "example.com"
parser.port;     // => "3000"
parser.pathname; // => "/pathname/"
parser.search;   // => "?search=test&hello=world"
parser.hash;     // => "#hash"
parser.host; // => "example.com:3000"

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

var query = parseQuery(parser.search);

for (var p in query) {
  if( query.hasOwnProperty(p) ) {
    
  var node = document.createElement("li");                 
  var textnode = document.createTextNode(p + " : " + query[p]);         
  node.appendChild(textnode);
  document.getElementById("myList").appendChild(node);

  } 
}
