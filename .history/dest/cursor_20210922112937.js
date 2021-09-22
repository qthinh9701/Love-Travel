window.addEventListener("load", function () {
  const cursor = document.querySelector("#cursor");
  console.log(cursor)
  cursor.addEventListener("mousemove", cursorMove);
  function cursorMove(e){
      e.page
  }
});
