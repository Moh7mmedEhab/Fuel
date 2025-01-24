let cursor = document.querySelector(".text");

let typingSpeed = 80;

let services = ["Engine Oil Change", "Battery Change", "Tires Change", "Rescue", "Gas | Petrol | CNG", "Car Wash"];

let serviceIndex = 0;

let wordIndex = 0;

let isTyping = true;

let language = document.querySelector(".translate");

let languageText = document.querySelector(".translate p");

let theme = document.querySelector(".theme i");

let menuButton = document.querySelector(".menu");

let menu = document.querySelector(".s-s");

let toggled = false;

/* Checking */

let links = document.querySelectorAll("link");

console.log(links);

switch (localStorage.getItem("language")) {

    case "EN":

        document.body.style.direction = "ltr";

        languageText.innerText = "AR";

        document.querySelector("html").lang = "en";

        break;

    case "AR":

        document.body.style.direction = "rtl";

        languageText.innerText = "EN";

        document.querySelector("html").lang = "ar";

        break;

}

switch (localStorage.getItem("theme")) {

    case "dark":



        break;

    case "light":

        theme.classList.remove("fa-sun");

        theme.classList.add("fa-moon");

        document.querySelector("head").removeChild(links[1]);

        break;

}

/* Checking */

function typeWriterEffect() {

    let currentService = services[serviceIndex];

    if (isTyping) {

        cursor.innerText = currentService.slice(0, wordIndex++);

        if (wordIndex > currentService.length) {

            isTyping = false;

            setTimeout(typeWriterEffect, 1500);

            return;

        }

    } else {

        cursor.innerText = currentService.slice(0, wordIndex--);

        if (wordIndex < 0) {

            wordIndex = 0;

            isTyping = true;

            serviceIndex = (++serviceIndex % services.length);

            setTimeout(typeWriterEffect, 1500);

            return;

        }

    }

    setTimeout(typeWriterEffect, isTyping ? typingSpeed : typingSpeed - 20)

}

typeWriterEffect();

language.addEventListener("click", () => {

    switch (window.localStorage.getItem("language")) {

        case "EN":

            languageText.innerText = "EN";

            window.localStorage.setItem("language", "AR");

            location.reload();

            break;

        case "AR":

            languageText.innerText = "AR";

            window.localStorage.setItem("language", "EN");

            location.reload();

            break;

        default:

            languageText.innerText = "EN";

            window.localStorage.setItem("language", "AR");

            location.reload();

        }

    }

);

theme.addEventListener("click", () => {

    switch (window.localStorage.getItem("theme")) {

        case "dark":

            theme.classList.remove("fa-sun");

            theme.classList.add("fa-moon");

            window.localStorage.setItem("theme", "light");

            location.reload();

            break;

        case "light":

            theme.classList.remove("fa-moon");

            theme.classList.add("fa-sun");

            window.localStorage.setItem("theme", "dark");

            location.reload();

            break;

        default:

            window.localStorage.setItem("theme", "light");

            theme.classList.remove("fa-sun");

            theme.classList.add("fa-moon");

            location.reload();

        }

    }

);

window.addEventListener("resize", () => {

    if (window.innerWidth >= 992) {

        if (toggled) {

            menuButton.click();

        }

    }

});

menuButton.addEventListener("click", () => {

    if (!toggled) {

        menu.style.height = "252px";

        toggled = true;

    } else {

        menu.style.height = "0px";

        toggled = false;

    }

});