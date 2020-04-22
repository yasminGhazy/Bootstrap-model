/*
function elem(selector, eventName, fun) {
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
  
*/

class modal {
run() {
    let viewSelector =document.querySelectorAll('.view');
    for (let i = 0; i < viewSelector.length; i++) {
      viewSelector[i].addEventListener('click', function () {
        document.getElementById(this.dataset.target).style.display = "block";
      });
    }
    let closeSelector =document.querySelectorAll('.close');
    for (let i = 0; i < closeSelector.length; i++) {
      closeSelector[i].addEventListener('click', function () {
        document.getElementById(this.dataset.target).style.display = "none";
      });
    }
  }
}
let myModal = new modal();
myModal.run();