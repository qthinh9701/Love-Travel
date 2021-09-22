window.addEventListener("load", function () {
  const cursor = document.querySelector("#cursor");
  console.log(cursor);
  this.window.addEventListener("mousemove", cursorMove);
  function cursorMove(e) {
    const pageX = e.pageX;
    const pageY = e.pageY;
    console.log(pageX, pageY);
  }
});
