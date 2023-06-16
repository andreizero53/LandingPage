// JavaScript code to enable image zooming

var modal = document.getElementById('myModal');
var images = document.getElementsByClassName('modal-img');
var modalImg = document.getElementById("modalImg");
var captionText = document.getElementById("caption");
var span = document.getElementsByClassName("close")[0];

for (var i = 0; i < images.length; i++) {
  images[i].onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.nextElementSibling.innerHTML;
  };
}

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
