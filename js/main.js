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



    //Offer

    // changing services
    const serviceList = document.querySelectorAll(".offer__service");
    const serviceDescriptionList = document.querySelectorAll(".offer__description");
    const descriptionshow = document.querySelector(".offer__description--show")

    serviceList.forEach(service => {
        service.addEventListener("click", () => {
            let activeService = document.querySelector(".offer__service--active")
            // let activeDescription = document.querySelector(".offer__description--active");

            if (service.dataset.service != activeService) {
                serviceList.forEach(item => {
                    item.classList.remove("offer__service--active");
                });
                service.classList.toggle("offer__service--active");



                // descriptionshow.classList.remove("offer__description--active");
                // descriptionshow.innerHTML = serviceDescriptionList[service.dataset.service - 1].innerHTML;
                // descriptionshow.classList.add("offer__description--active");




                serviceDescriptionList.forEach(item => {
                    item.classList.remove("offer__description--active");
                });

                console.log(serviceDescriptionList[service.dataset.service - 1]);
                serviceDescriptionList[service.dataset.service - 1].classList.add("offer__description--active");
            }

            // let numberOfService = service.dataset.service;
            // let numberOfDescription = ;



        });
    });

});