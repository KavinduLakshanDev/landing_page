document.addEventListener("DOMContentLoaded", function() {
    const langSwitcher = document.getElementById("lang-switcher");
    const content = document.querySelector(".hero p");

    langSwitcher.addEventListener("change", function() {
        if (this.value === "fr") {
            content.innerText = "Bienvenue sur notre site!";
        } else {
            content.innerText = "Welcome to our website!";
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var swiper = new Swiper(".swiper-container", {
        loop: true,
        autoplay: { delay: 3000 },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
   
    const langSwitcher = document.getElementById("lang-switcher");
    const content = document.querySelector(".hero p");

    langSwitcher.addEventListener("change", function() {
        content.innerText = (this.value === "fr") ? "Bienvenue sur notre site!" : "Welcome to our website!";
    });

   
    var swiper = new Swiper(".swiper-container", {
        loop: true,
        autoplay: { delay: 4000 },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
});


function highlightLine(index) {
    document.querySelectorAll(".news-indicator .line").forEach((line, i) => {
        line.classList.toggle("highlight", i === index - 1);
    });
}


document.addEventListener("DOMContentLoaded", function() {
    
    var swiper = new Swiper(".swiper-container", {
        loop: true, 
        autoplay: {
            delay: 4000, 
            disableOnInteraction: false, 
        },
        slidesPerView: 1, 
        spaceBetween: 20, 
        navigation: {
            nextEl: ".testimonial-nav.right", 
            prevEl: ".testimonial-nav.left",  
        },
        pagination: {
            el: ".swiper-pagination", 
            clickable: true, 
        },
    });
});
