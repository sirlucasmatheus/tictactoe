function MuteAudio(){
    var audioMenu=document.getElementById('audio-menu');
    audioMenu.muted=true;
}
function noMuteAudio(){
    var audioMenu=document.getElementById('audio-menu');
    audioMenu.muted=false;
}
//on move mouse menu effect
function soundEffectMenu(){
    var soundEffect=document.getElementById('sound-effect-menu');
    soundEffect.play();
}