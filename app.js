let nextBtn = document.getElementById("next-button");
let loading = document.getElementById("loading");
let menuBtn = document.getElementById("menu-btn");
let menu = document.getElementById("navbar");
let main2 = document.getElementById("main2");
let main3 = document.getElementById("main3");
let box = document.getElementById("box");
let planetsGallery = document.getElementById("planets-gallery")

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
    let scrollTop = window.scrollY;
    if (scrollTop > 80) {
        document.querySelector("header").classList.add("scrolled");
        document.querySelector(".both").classList.add("scrolled");
    } else {
        document.querySelector("header").classList.remove("scrolled");
        document.querySelector(".both").classList.remove("scrolled");
    }
    
    if (scrollTop > 150) {
        document.querySelector("#home").classList.add("scrolled");
    } else {
        document.querySelector("#home").classList.remove("scrolled");
    }
});

function scrollPlanets() {
    let chevron1 = document.querySelector("#planets-cont section i:last-of-type");
    let chevron2 = document.querySelector("#planets-cont section i:first-of-type");
    let planetsGal = document.querySelector("#planets-gallery");
    

    let curImg = 1

    chevron1.addEventListener("click", function() {
        let img1 = document.querySelector()
        switch(curImg) {
            case 1:
                chevron1.style.setProperty("opacity", "0.3");
                console.log(curImg)
                curImg = 0;
                break;
            case 2:
                chevron2.style.setProperty("opacity", "1");
                curImg = 1;
                console.log(curImg)
                break;                
        }
    })

    chevron2.addEventListener("click", function() {
        switch(curImg) {
            case 0:
                chevron1.style.setProperty("opacity", "1");
                console.log(curImg)
                curImg = 1;
                break;
            case 1:
                chevron2.style.setProperty("opacity", "0.3");
                curImg = 2;
                console.log(curImg)
                break;
        }
    })
}

scrollPlanets()