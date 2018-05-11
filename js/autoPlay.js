let main = document.getElementById("main");

function play(time) {
  console.log(main.offsetLeft);
  let timer = setInterval(() => {
    if (main.offsetLeft <= -600) {
      main.style.left = 0;
    }
    main.style.left = main.offsetLeft - 300 + "px";
  }, time);
}
play(2000);
