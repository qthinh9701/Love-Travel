window.addEventListener("load", function(){
    const cursor = document.querySelector("#cursor");
    cursor.addEventListener("mousemove", (e) => {
        const pageX = e.pageX;
        const pageY = e.pageY;
        console.log(pageX)
    })
})