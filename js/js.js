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
var view = document.querySelectorAll(".view");
var close = document.querySelectorAll(".close");
var value;
for (var i = 0; i < view.length; i++) {
  value =view[i].dataset.target;
  view[i].addEventListener("click", function() {
    viewModel(value);
  });
}

for (var i = 0; i < close.length; i++) {
  value =view[i].dataset.target;
  close[i].addEventListener("click", function(){
    closeModel(value);
  });

}
function viewModel(v) {
  document.getElementById(v).style.display = "block";

}
function closeModel(v) {
  document.getElementById(v).style.display = "none";

}
/*
window.onclick = function (event) {
  var view = document.querySelectorAll(".view");
  var close =document.querySelectorAll(".close");
  for (var i = 0; i < view.length; i++) {

    if (view[i] == event.target) {
      document.getElementById(view[i].dataset.target).style.display = "block"

      break;
    }
  }
  for (var i = 0; i < close.length; i++) {
    if (close[i] == event.target) {
      document.getElementById(close[i].dataset.target).style.display = "none"
      break;
    }
  }
}*/

/*
var view = document.querySelectorAll(".view");
for (var i; i < view.length; i++) {
  if (view[i].dataset.target ==doc) {
    document.getElementById(view).style.display = "block"
    break;
  }
}
var view = document.querySelectorAll(".view")[0].dataset.target;
*/
/*
$(".view").on('click',function(event){

  $(document.getElementById(event.target.dataset.target)).css({"display":"block"});
});
$(".close").on('click',function(event){
  $(document.getElementById(event.target.dataset.target)).css({"display":"none"});
});*/