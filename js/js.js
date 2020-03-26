function viewoverlay(){
    
    document.getElementById("overlay").style.display = "block";
}
function closeoverlay1(){
    
   var modal = document.getElementById('overlay');

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}

function closeoverlay2()
{
    document.getElementById("overlay").style.display = "none";

}