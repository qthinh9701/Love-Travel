window.addEventListener("load", function () {
  const cursor = document.querySelector("#cursor");
  console.log(cursor);
  window.addEventListener("mousemove", cursorMove);
  function cursorMove(e) {
    const pageX = e.pageX;
    const pageY = e.pageY;
    cursor.style.left = pageX + "px";
    cu
  }
});
