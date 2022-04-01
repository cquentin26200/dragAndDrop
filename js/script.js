const asideBlue = document.querySelector("main aside .blue");
const asideRed = document.querySelector("main aside .red");
const asideGreen = document.querySelector("main aside .green");
const draggablediv = document.querySelectorAll("main aside div");

let a = true;
function dragAndDrop() {
  for (let i = 0; i < draggablediv.length; i++) {
    let x;
    let y;
    draggablediv[i].style.position = "absolute";
    draggablediv[i].onmousedown = function () {
      document.onmousemove = function (e) {
        x = e.pageX;
        y = e.pageY;
        draggablediv[i].style.left = x - 20 + "px";
        draggablediv[i].style.top = y - 20 + "px";
      }
    };
  }
}

dragAndDrop();

document.removeEventListener("mouseup", dragAndDrop, true);
