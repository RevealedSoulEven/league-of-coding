window.addEventListener("resize",scrollGrid);
window.addEventListener("scroll",scrollGrid);

function scrollGrid(){
    let bodyHeight = document.body.offsetHeight,
    mainHeight=document.querySelector("main").offsetHeight,
        cards=document.querySelector(".cards"),
        transY = (window.pageYOffset/(mainHeight-bodyHeight))*-100;
    cards.style.setProperty("--scroll",transY+"%");
}

scrollGrid();