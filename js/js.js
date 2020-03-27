/*function viewoModal(){
    
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

}*/

/*

function closeModalByOverlay(){

var modal_id=event.target.dataset.target;
  var modal = document.getElementById(modal_id);
window.onclick = function(event) {
 if (event.target == modal) {
  document.getElementById( modal_id).style.display = "none";
 }
}
}*/



$(".view").on('click',function(event){

  $(document.getElementById(event.target.dataset.target)).css({"display":"block"});
});
$(".close").on('click',function(event){
  $(document.getElementById(event.target.dataset.target)).css({"display":"none"});
});