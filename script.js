let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

  // Smoke trail cursor effect
  document.addEventListener('mousemove', e => {
    const smoke = document.createElement('div');
    smoke.className = 'smoke';
    smoke.style.left = e.clientX + 'px'; // Use clientX for viewport-relative positioning
    smoke.style.top = e.clientY + 'px'; // Use clientY for viewport-relative positioning
    document.body.appendChild(smoke);

    // Remove after animation ends
    setTimeout(() => smoke.remove(), 1000);
});

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*="' + id + ']').classList.add('active'); 
            })
        }
    })
}

menuIcon.addEventListener('click', function() {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});