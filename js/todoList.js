document.getElementById("task1").onclick = function() {
  if (this.getAttribute("value") == 1) {
    document.getElementById("list").style.display = "block";
    document.getElementsByClassName("back")[0].style.display = "block";
    document.getElementById("main").style.display = "none";
  }
};

document.getElementsByClassName("back")[0].onclick = function() {
  document.getElementById("list").style.display = "none";
  document.getElementById("main").style.display = "block";
  this.style.display = "none";
};
