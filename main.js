window.onscroll = () => scrollFunction();

function scrollFunction() {
    if ((document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) && window.screen.width > 600){
        document.querySelector("header").style.background = "#f1f1f1";
    }
    else {
        document.querySelector("header").style.background = "transparent";
    }
}

document.querySelector(".menu-hamburguer").addEventListener("click", () => {
        document.querySelector(".menu-hamburguer").classList.toggle("change")
        document.querySelector(".menu").classList.toggle("show-menu")
    }
);