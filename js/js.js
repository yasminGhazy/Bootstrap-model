function viewoModal(){
    
    document.getElementById("modal").style.display = "block";
}
function closeModalByOverlay(){
    
   var modal = document.getElementById('modal');

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}

function closeModalByBtn()
{
    document.getElementById("modal").style.display = "none";

}