document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 10) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu functionality
    const hamburger = document.querySelector('.navbar-hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    const mobileMenuBackdrop = document.getElementById('mobileMenuBackdrop');

    function openMenu() {
        mobileMenu.classList.add('open');
        mobileMenuBackdrop.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    function closeMenu() {
        mobileMenu.classList.remove('open');
        mobileMenuBackdrop.style.display = 'none';
        document.body.style.overflow = '';
    }

    hamburger.addEventListener('click', openMenu);
    mobileMenuClose.addEventListener('click', closeMenu);
    mobileMenuBackdrop.addEventListener('click', closeMenu);
});
