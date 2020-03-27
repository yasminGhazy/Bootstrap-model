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
function viewoModal(){
    
 /* var modal_id=document.getElementsByTagName("button")[0].getAttribute("data-target");
  document.getElementById(modal_id).style.display = "block";*/
  var modal_id=event.target.dataset.target;
  document.getElementById( modal_id).style.display = "block";
}
function closeModalByBtn()
{
  var modal_id=event.target.dataset.target;
  /*var modal_id=document.getElementsByTagName("button")[0].getAttribute("data-target");*/
  document.getElementById( modal_id).style.display = "none";

}

function closeModalByOverlay(){
  /*var modal_id=document.getElementsByClassName("close")[0].getAttribute("data-target");
*/
var modal_id=event.target.dataset.target;
  var modal = document.getElementById(modal_id);
window.onclick = function(event) {
 if (event.target == modal) {
  document.getElementById( modal_id).style.display = "none";
 }
}
}

/*
$(".view").on('click',function(){

  $(".model_").css({"display":"block"});
});
$(".close").on('click',function(){
  $(".model_").css({"display":"none"});
});*/