let nextBtn = document.getElementById("next-button");
let loading = document.getElementById("loading");
let menuBtn = document.getElementById("menu-btn");
let menu = document.getElementById("navbar");
let main2 = document.getElementById("main2");
let main3 = document.getElementById("main3");
let box = document.getElementById("box");

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

box.addEventListener("click", function() {
    if(menuBtn.className == "norm open") {
        menuBtn.className = "norm";
        menu.className = "";
        document.querySelector("header section").classList.remove("open");
    }
})


function mainSite() {
    let mainContent = document.getElementById("main");
    mainContent.style.setProperty("display", "none");
    mainContent.remove()

    menu.classList.add("norm")
    menuBtn.classList.add("norm")

    document.querySelector(".body1").classList.add("open");
    menu.classList.remove("closed")
    main2.classList.add("open")
    main3.classList.add("open")
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

let observer = new IntersectionObserver((entries) => {
    entries.forEach((el) => {
        console.log("entry");
        if(el.isIntersecting) {
            el.target.classList.add("seen")
        } else {
            el.target.classList.remove("seen")
        }
    })
})

const hiddenELements = document.querySelectorAll(".hidden");
const hiddenELementsL = document.querySelectorAll(".hiddenL");
hiddenELements.forEach((el) => observer.observe(el));
hiddenELementsL.forEach((el) => observer.observe(el));

document.addEventListener('scroll', function() {
    var scrollTop = window.scrollY;
    if (scrollTop > 80) {
        document.querySelector("header").classList.add("scrolled");
        document.querySelector(".both").classList.add("scrolled");
    } else {
        document.querySelector("header").classList.remove("scrolled");
        document.querySelector(".both").classList.remove("scrolled");
    }

    console.log('Scroll Percent:', scrollTop);
});