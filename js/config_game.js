function voltar(){
    var voltarToMenu=document.getElementById('logo-and-menu');
    var hiddenContent=document.getElementById('single-player');
    if(voltarToMenu.style.visibility=="hidden"){
        hiddenContent.style.visibility="hidden";
        voltarToMenu.style.visibility="visible";
    }
}
function configClickPlayer(element){
    var player1=element.innerHTML='&#10006;';
    //var player1=document.getElementById('click-x-or-o').innerHTML+='&#10006;';
    var player2=element.innerHTML='&#9711;';
}