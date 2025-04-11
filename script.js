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

// Tilføj til din script.js
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('bg-video');
    video.play().catch(e => {
        // Fallback hvis autoplay ikke virker
        const videoContainer = document.querySelector('.video-background');
        videoContainer.style.background = 'url(Images/kontakt-fallback.jpg) center/cover no-repeat';
        video.style.display = 'none';
    });
});