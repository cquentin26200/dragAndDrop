const box = document.querySelectorAll(".box");
const redbox = document.querySelector(".redbox");

box.forEach((element) => {
  redbox.addEventListener("click", console.log("event.target"));
  element.addEventListener("dragenter", dragEnter);
  element.addEventListener("dragover", dragOver);
  element.addEventListener("dragleave", dragLeave);
  element.addEventListener("drop", drop);
});
function dragEnter(e) {
  e.target.classList.add("drag-over");
}

function dragOver(e) {
  e.target.classList.add("drag-over");
}

function dragLeave(e) {
  e.preventDefault();
  e.target.classList.remove("drag-over");
}

function drop(e) {
  e.preventDefault();
  e.target.classList.remove("drag-over");
}
