let url = location.href;
let id = url.split("?")[1].split("=")[1];

document.getElementById("list" + id).style.display = "block";
