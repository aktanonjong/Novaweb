// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.main-header');
    const backToTop = document.getElementById('back-to-top');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    if (window.scrollY > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

// Smooth Scroll + Close mobile menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
            const headerOffset = 90;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Close mobile menu
            const menu = document.querySelector('.nav-menu ul');
            if (menu.classList.contains('active')) {
                menu.classList.remove('active');
            }
        }
    });
});

// Toggle Mobile Menu
function toggleMenu() {
    document.querySelector('.nav-menu ul').classList.toggle('active');
}

// Back to Top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}