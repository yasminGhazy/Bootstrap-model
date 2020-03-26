function viewoModel(){
    
    document.getElementById("overlay").style.display = "block";
}
function closeModelByOverlay(){
    
   var modal = document.getElementById('overlay');

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}

function closeModelByBtn()
{
    document.getElementById("overlay").style.display = "none";

}