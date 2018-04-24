var text = "Click Start button!! Нажмите кнопку Пуск! Cliquez sur le bouton Démarrer! Klicken den Startknopf!";

for(var i in text) { 
  if(text[i] === " ") {
    $(".wavetext").append( $("<span>").html("&nbsp;") ); 
  } else {  
    $(".wavetext").append( $("<span>").text(text[i]) ); 
  }
}
