let nextBtn = document.getElementById("next-button");
let loading = document.getElementById("loading");
let menuBtn = document.getElementById("menu-btn");
let menu = document.getElementById("navbar");

menuBtn.addEventListener("click", function() {
    if(menuBtn.className == "open") {
        menuBtn.className = "";
        menu.className = "";
        document.querySelector("header section").classList.remove("open");
    } else {
        menuBtn.className = "open";
        menu.className = "open";
        document.querySelector("header section").classList.add("open");
    }
})

// po kliknieciu w menuBtn musi sie zmieniac justify content i display i do body1 klasa open

function mainSite() {
    let mainContent = document.getElementById("main");
    mainContent.style.setProperty("display", "none");
    mainContent.remove()

    let mainContent2 = document.getElementById("main2");
    mainContent2.style.setProperty("display", "flex");
    menuBtn.style.setProperty("display", "flex")
    document.querySelector(".body1").classList.add("open");
}

nextBtn.addEventListener("click", function() {
    setTimeout(() => {
        loading.style.setProperty("transform", "translateX(0)")
        setTimeout(() => {
            mainSite()
            setTimeout(() => {
                loading.style.setProperty("transform", "translateX(-100%)")
            }, 200)
        }, 800)
    }, 200);
   
})

window.addEventListener("load", function() {
    setTimeout(() => {
        loading.style.setProperty("transform", "translateX(-100%)")
    }, 500);
})

