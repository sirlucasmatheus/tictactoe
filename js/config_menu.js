//icon sound
function off_sound(){
    var soundOn=document.getElementById('sound-on');
    var soundOff=document.getElementById('sound-off');
    if(soundOn!=false){
        soundOff.style.display="inline";
        soundOff.style.left="1.3%";
        soundOn.style.display="none";
        MuteAudio();
    }
}
function on_sound(){
    var soundOn=document.getElementById('sound-on');
    var soundOff=document.getElementById('sound-off');
    if(soundOff!=false){
        soundOff.style.display="none";
        soundOn.style.display="inline";
        noMuteAudio();
    }
}

//icon and config fullscreen
/*function deixarTelaCheia() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
     (!document.mozFullScreen && !document.webkitIsFullScreen)) {
         
      if (document.documentElement.requestFullScreen) {  
        document.documentElement.requestFullScreen();  
      } else if (document.documentElement.mozRequestFullScreen) {  
        document.documentElement.mozRequestFullScreen();  
      } else if (document.documentElement.webkitRequestFullScreen) {  
        document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
        document.getElementById('screen-game-space').style.width="100%";
        document.getElementById('screen-game-space').style.left="0";
        document.getElementById('screen-game-space').style.top="0";
        document.getElementById('screen-game-space').style.height="100%";
        document.getElementById('x-or-o').style.bottom="50.7em";
        document.getElementsById('click-x-or-o').style.padding=".5% 2% 0 2%";
      }  
    } else {  
        document.getElementById('screen-game-space').style.width="80%";
        document.getElementById('screen-game-space').style.left="10%";
        document.getElementById('screen-game-space').style.top="6%";
        document.getElementById('screen-game-space').style.height="87%";
        document.getElementById('x-or-o').style.bottom="46.35em";
        document.getElementsByClassName('click-edit').style.margin="2% 1% 2% 1%";
      if (document.cancelFullScreen) {  
        document.cancelFullScreen();  
      } else if (document.mozCancelFullScreen) {  
        document.mozCancelFullScreen();  
      } else if (document.webkitCancelFullScreen) {  
        document.webkitCancelFullScreen();  
      }  
    }  
  }*/


// single and two player screen
function single_player(){
    var limpaDiv=document.getElementById('logo-and-menu');
    var exibeDiv=document.getElementById('single-player');
    limpaDiv.style.visibility="hidden";
    if(limpaDiv.style.visibility=="hidden"){
        exibeDiv.style.visibility="visible";
    }
}
function two_player(){
    document.getElementById('menu-part').innerHTML="";
    document.getElementsByClassName('logo-edit').style.left="8%";
}
 