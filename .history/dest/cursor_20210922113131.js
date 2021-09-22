window.addEventListener("load", function () {
  const cursor = document.querySelector("#cursor");
  console.log(cursor);
  win.addEventListener("mousemove", cursorMove);
  function cursorMove(e) {
    const pageX = e.pageX;
    const pageY = e.pageY;
    console.log(pageX, pageY);
  }
});
