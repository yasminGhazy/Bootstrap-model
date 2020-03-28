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
function elem( selector, eventName, fun ){
  for (let i = 0; i < document.querySelectorAll(selector).length; i++) {
    document.querySelectorAll(selector)[i].addEventListener(eventName, fun);
   }
}

 elem('.view', 'click', function (e) {
  document.getElementById(this.dataset.target).style.display = "block";
});

elem('.close', 'click', function (e) {
  document.getElementById(this.dataset.target).style.display = "none";
});
/*
for (let i = 0; i < document.querySelectorAll(".view").length; i++) {
 let value =document.querySelectorAll(".view")[i].dataset.target;
  document.querySelectorAll(".view")[i].addEventListener("click", function() {
    viewModel(value);
  });
}

for (let i = 0; i < document.querySelectorAll(".close").length; i++) {
  let value =document.querySelectorAll(".close")[i].dataset.target;
  document.querySelectorAll(".close")[i].addEventListener("click", function(){
    closeModel(value);
  });

}
function viewModel(v) {
  document.getElementById(v).style.display = "block";

}
function closeModel(v) {
  document.getElementById(v).style.display = "none";

}
*/
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