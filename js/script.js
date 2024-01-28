let navbarLink = document.querySelectorAll('.navbar__link');
let iam = document.querySelector('.section__welcome_header');
let previousIndex = -1;
let phrases = [
    "I am a web developer",
    "I am a programmer",
    "I am a Pokemon 0_0"
]

document.addEventListener('DOMContentLoaded', function() {
    let navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        if(window.scrollY == 0) {
            navbar.classList.add('navbar__transparent');
        }
        else {
            navbar.classList.remove('navbar__transparent');
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

    console.log(iam);

    function changePhrase() {
        // Generate a random index different from the previous one
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * 3);
        } while (newIndex === previousIndex);
    
        // Update previousIndex with the new index
        previousIndex = newIndex;
    
        iam.textContent = phrases[newIndex];
    }
    
    function checkWidth() {
        if(iam.offsetWidth == 2) {
            changePhrase();
        }

        setTimeout(checkWidth, 200);
    }

    checkWidth();



});