document.addEventListener('DOMContentLoaded', function () {
    const scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '#navbarNavAltMarkup'
    });

    const navListItems = document.querySelectorAll(".navbar-nav");
    const navMenu = document.querySelector(".navbar-collapse");

    navListItems.forEach(item => {
        item.addEventListener("click", () => {
            navMenu.classList.toggle("show")
        });
    });

});