let navbarLink = document.querySelectorAll('.navbar__link');

document.addEventListener('DOMContentLoaded', function() {
    let navbar = document.querySelector('.navbar');
    let navbarLogo = document.querySelector('.navbar__logo');
    let navbarLinks = document.querySelectorAll('.navbar__link');

    window.addEventListener('scroll', function() {
        if(window.scrollY == 0) {
            navbar.classList.add('navbar__transparent');
            navbarLogo.classList.add('text-dark');
            navbarLinks.forEach((element) => {
                element.classList.add('text-dark');
            });
        }
        else {
            navbar.classList.remove('navbar__transparent');
            navbarLogo.classList.remove('text-dark');
            navbarLinks.forEach((element) => {
                element.classList.remove('text-dark');
            });
        }
    })

    navbarLink.forEach(function(item) {
        item.addEventListener('click', function(){
            let navbarLinkActive = document.querySelector('.navbar__link_active');
            if(navbarLinkActive != null) {
                navbarLinkActive.classList.remove('navbar__link_active');
            }
            item.classList.add('navbar__link_active');
        });
    });


    


});