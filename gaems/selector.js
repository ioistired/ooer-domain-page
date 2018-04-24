var text = ["Click Start button!", "Нажмите кнопку Пуск!", "Нажмите кнопку Пуск!", "Klicken den Startknopf!"];
var counter = 0;
var elem = document.getElementById("wavetext");
var inst = setInterval(change, 4000);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}
for(var i in text) { 
  if(text[i] === " ") {
    $(".wavetext").append( $("<span>").html("&nbsp;") ); 
  } else {  
    $(".wavetext").append( $("<span>").text(text[i]) ); 
  }
}
