// brugermenu

// Opdateret burger menu funktionalitet
document.addEventListener('DOMContentLoaded', function() {
    const navToggler = document.querySelector('.nav-toggler');
    const aside = document.querySelector('.aside');
    const navLinks = document.querySelectorAll('.nav li a');
    
    // Vis burger menu på mobile
    function checkScreenSize() {
        if (window.innerWidth <= 1199) {
            navToggler.style.display = 'flex';
        } else {
            navToggler.style.display = 'none';
            aside.classList.remove('open');
        }
    }
    
    // Kør ved load og resize
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    // Tilføj event listener til burgermenuen
    navToggler.addEventListener('click', function(e) {
        e.stopPropagation();
        aside.classList.toggle('open');
        navToggler.classList.toggle('active');
    });
    
    // Luk menu når der klikkes på et link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 991) {
                aside.classList.remove('open');
                navToggler.classList.remove('active');
            }
        });
    });
    
    // Luk menu når der klikkes udenfor
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 991 && 
            aside.classList.contains('open') && 
            !aside.contains(e.target) && 
            e.target !== navToggler) {
            aside.classList.remove('open');
            navToggler.classList.remove('active');
        }
    });
    
    // Forhindrer at klik på selve menuen lukker den
    aside.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});




/* ==== typing animation ====*/ 
var typed = new Typed('.typing', {
    strings: ['Web Developer', 'Web Designer', 'Grafisk Designer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})


/* Billede beskrivelse */
document.querySelectorAll('.scope span').forEach(item => {
    item.addEventListener('click', event => {
        // Hent data fra det klikkede element
        const name = item.getAttribute('data-name');
        const description = item.getAttribute('data-description');
        const role = item.getAttribute('data-role');
        const imageSrc = item.querySelector('img').src;

        // Opdater modalvinduet med de hentede data
        document.getElementById('modalName').textContent = name;
        document.getElementById('modalDescription').textContent = description;
        document.getElementById('modalRole').textContent = role;
        document.getElementById('modalImage').src = imageSrc;

        // Vis modalvinduet
        document.getElementById('projectModal').style.display = 'block';
    });
});

// Luk modalvinduet når brugeren klikker på krydset
document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('projectModal').style.display = 'none';
});

// Luk modalvinduet når brugeren klikker uden for modalindholdet
window.addEventListener('click', (event) => {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

