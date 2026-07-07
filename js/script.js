async function loadComponent(id, file) {

    const element = document.getElementById(id);

    if (!element) return;

    try {

        const response = await fetch(file);

        element.innerHTML = await response.text();

        if (id === "navbar") {

            const currentPage = window.location.pathname.split("/").pop() || "index.html";

            document.querySelectorAll(".nav-links a").forEach(link => {

                if (link.getAttribute("href") === currentPage) {

                    link.classList.add("active");

                }

            });

        }

    } catch (error) {

        console.error(error);

    }

}

loadComponent("navbar", "components/navbar.html");
loadComponent("footer", "components/footer.html");

loadComponent("navbar","components/navbar.html");

loadComponent("footer","components/footer.html");

/*=========================================
        SCROLL PROGRESS
=========================================*/

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    const progressBar = document.getElementById("progress-bar");

if (progressBar) {

    progressBar.style.width = progress + "%";

}

});

/*=========================================
        SCROLL TO TOP
=========================================*/

const scrollTopBtn = document.getElementById("scrollTopBtn");

if (scrollTopBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            scrollTopBtn.classList.add("show");

        } else {

            scrollTopBtn.classList.remove("show");

        }

    });

    scrollTopBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}
/*=========================================
        SCROLL REVEAL
=========================================*/

const reveals = document.querySelectorAll(".reveal");

function revealElements(){

    const trigger = window.innerHeight * 0.85;

    reveals.forEach(element=>{

        const top = element.getBoundingClientRect().top;

        if(top < trigger){

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealElements);

window.addEventListener("load", revealElements);

/*=========================================
            COUNTER ANIMATION
=========================================*/

const counters = document.querySelectorAll(".counter");

let counterStarted = false;

function runCounter(){

    if(counterStarted) return;

    const stats = document.querySelector(".stats");

    if(!stats) return;

    const trigger = window.innerHeight * 0.8;

    if(stats.getBoundingClientRect().top < trigger){

        counterStarted = true;

        counters.forEach(counter=>{

            const target = +counter.dataset.target;

            let count = 0;

            const speed = target / 80;

            const updateCounter = ()=>{

                count += speed;

                if(count < target){

                    counter.innerText = Math.ceil(count);

                    requestAnimationFrame(updateCounter);

                }else{

                    counter.innerText = target;

                }

            }

            updateCounter();

        });

    }

}

window.addEventListener("scroll", runCounter);

window.addEventListener("load", runCounter);

/*=========================================
        NAVBAR SCROLL EFFECT
=========================================*/

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    if (window.scrollY > 80) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});

/*=========================================
        MOBILE NAVIGATION
=========================================*/

document.addEventListener("click",function(e){

    const toggle=document.getElementById("menuToggle");

    const nav=document.querySelector(".nav-links");

    if(!toggle || !nav) return;

    if(toggle.contains(e.target)){

        nav.classList.toggle("active");

        return;

    }

    if(!nav.contains(e.target)){

        nav.classList.remove("active");

    }

});