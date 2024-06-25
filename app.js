let nextBtn = document.getElementById("next-button");
let loading = document.getElementById("loading");
let menuBtn = document.getElementById("menu-btn");
let menu = document.getElementById("navbar");
let main2 = document.getElementById("main2");

menuBtn.addEventListener("click", function() {
    if(menuBtn.className == "norm open") {
        menuBtn.className = "norm";
        menu.className = "";
        document.querySelector("header section").classList.remove("open");
    } else {
        menuBtn.className = "norm open";
        menu.className = "open";
        document.querySelector("header section").classList.add("open");
    }
})

// po kliknieciu w menuBtn musi sie zmieniac justify content i display i do body1 klasa open

function mainSite() {
    let mainContent = document.getElementById("main");
    mainContent.style.setProperty("display", "none");
    mainContent.remove()

    menu.classList.add("norm")
    menuBtn.classList.add("norm")

    document.querySelector(".body1").classList.add("open");
    menu.classList.remove("closed")
    main2.classList.add("open")
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

