// Change navbar background while scrolling

window.addEventListener("scroll", function(){

    const header = document.querySelector("header");

    if(window.scrollY > 80){

        header.style.background = "rgba(245,238,220,.97)";

    }
    else{

        header.style.background = "rgba(245,238,220,.85)";

    }

});
