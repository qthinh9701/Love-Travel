const cursor = document.querySelector("#cursor");
const navLinks = document.querySelectorAll(".header-nav__left-lists li");

document.addEventListener("mousemove", cursorMove);
function cursorMove(e) {
  const pageX = e.pageX;
  const pageY = e.pageY;
  cursor.style.left = pageX + "px";
  cursor.style.top = pageY + "px";
}
navLinks.forEach((link) => {
    link.addEventListener("mouseover", () =>{
        cursor.style.transform = "scale(2) "
        cursor.style.back
    });
    link.addEventListener("mouseleave", () =>{
        cursor.style.transform = "scale(1)"
    });
});
