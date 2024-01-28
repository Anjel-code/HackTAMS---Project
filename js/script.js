let navbarLink = document.querySelectorAll('.navbar__link');

console.log(navbarLink);


navbarLink.forEach(function(item) {
    item.addEventListener('click', function(){
        let navbarLinkActive = document.querySelector('.navbar__link_active');
        if(navbarLinkActive != null) {
            navbarLinkActive.classList.remove('navbar__link_active');
        }
        item.classList.add('navbar__link_active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        if(window.scrollY == 0) {
            navbar.classList.add('navbar__transparent');
        }
        else {
            navbar.classList.remove('navbar__transparent');
        }
    })
});