const cursor = document.querySelector("#cursor");
const navLinks = document.querySelectorAll(".header-nav__left-lists li");
const links = document.querySelectorAll(".header-nav__left-lists li a");
document.addEventListener("mousemove", cursorMove);
function cursorMove(e) {
  const pageX = e.clientX;
  const pageY = e.clineY;
  cursor.style.left = pageX + "px";
  cursor.style.top = pageY + "px";
}

navLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    cursor.style.transform = "scale(2) ";
    cursor.style.background = "transparent";
    link.classList.add("hovered-link")
  });
  link.addEventListener("mouseleave", () => {
    cursor.style.transform = "scale(1)";
    cursor.style.background = "";
  });
});
