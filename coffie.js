const header = document.querySelector("header");
    const menuBtn = document.querySelector("#menu-btn");
    const CloseMenuBtn = document.querySelector("#close-menu-btn");

    menuBtn.addEventListener("click",() => {
        header.classList.toggle("show-mobile-menu");
    });
    CloseMenuBtn.addEventListener("click",() => {
        menuBtn.click();
    });