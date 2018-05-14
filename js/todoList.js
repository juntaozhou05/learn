for (let i = 0; i < document.getElementsByTagName("li").length; i++) {
  document.getElementsByTagName("li")[i].onclick = function(e) {
    location.href = "./todeTask.html?id=" + (i + 1);
  };
}
