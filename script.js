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

    // FAQ accordion functionality
    const faqCards = document.querySelectorAll('.faq-container-card');
    if (faqCards.length > 0) {
        faqCards[0].classList.add('active');
    }
    faqCards.forEach(card => {
        card.addEventListener('click', function () {
            // Close all other cards
            faqCards.forEach(c => {
                if (c !== card) c.classList.remove('active');
            });
            // Toggle this card
            card.classList.toggle('active');
        });
    });

    // Modal functionality
    const rewardsBtn = document.querySelector('.rewards-btn');
    const mobileRewardsBtn = document.querySelector('.mobile-rewards-btn');
    const modal = document.getElementById('rewardsModal');
    const closeModal = document.getElementById('closeModal');

    function openModal() {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModalFunc() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Open modal when rewards button is clicked
    if (rewardsBtn) {
        rewardsBtn.addEventListener('click', openModal);
    }
    if (mobileRewardsBtn) {
        mobileRewardsBtn.addEventListener('click', openModal);
    }

    // Close modal when close button is clicked
    if (closeModal) {
        closeModal.addEventListener('click', closeModalFunc);
    }

    // Close modal when clicking outside
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModalFunc();
            }
        });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModalFunc();
        }
    });

    // Terms of Use Modal functionality
    const termsBtn = document.querySelector('.footer-link button');
    const termsModal = document.getElementById('termsModal');
    const closeTermsModal = document.getElementById('closeTermsModal');

    function openTermsModal() {
        termsModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeTermsModalFunc() {
        termsModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Open Terms modal when Terms button is clicked
    if (termsBtn) {
        termsBtn.addEventListener('click', openTermsModal);
    }

    // Close Terms modal when close button is clicked
    if (closeTermsModal) {
        closeTermsModal.addEventListener('click', closeTermsModalFunc);
    }

    // Close Terms modal when clicking outside
    if (termsModal) {
        termsModal.addEventListener('click', function(e) {
            if (e.target === termsModal) {
                closeTermsModalFunc();
            }
        });
    }

    // Close Terms modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && termsModal.classList.contains('active')) {
            closeTermsModalFunc();
        }
    });

    // Cookie Policy Modal functionality
    const cookieBtn = Array.from(document.querySelectorAll('.footer-link button')).find(btn => btn.textContent.trim() === 'Cookies');
    const cookieModal = document.getElementById('cookieModal');
    const closeCookieModal = document.getElementById('closeCookieModal');

    function openCookieModal() {
        cookieModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeCookieModalFunc() {
        cookieModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Open Cookie modal when Cookies button is clicked
    if (cookieBtn) {
        cookieBtn.addEventListener('click', openCookieModal);
    }

    // Close Cookie modal when close button is clicked
    if (closeCookieModal) {
        closeCookieModal.addEventListener('click', closeCookieModalFunc);
    }

    // Close Cookie modal when clicking outside
    if (cookieModal) {
        cookieModal.addEventListener('click', function(e) {
            if (e.target === cookieModal) {
                closeCookieModalFunc();
            }
        });
    }

    // Close Cookie modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && cookieModal.classList.contains('active')) {
            closeCookieModalFunc();
        }
    });

    // Privacy Policy Modal functionality
    const privacyBtn = Array.from(document.querySelectorAll('.footer-link button')).find(btn => btn.textContent.trim() === 'Privay Policy');
    const privacyModal = document.getElementById('privacyModal');
    const closePrivacyModal = document.getElementById('closePrivacyModal');

    function openPrivacyModal() {
        privacyModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closePrivacyModalFunc() {
        privacyModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Open Privacy modal when Privacy Policy button is clicked
    if (privacyBtn) {
        privacyBtn.addEventListener('click', openPrivacyModal);
    }

    // Close Privacy modal when close button is clicked
    if (closePrivacyModal) {
        closePrivacyModal.addEventListener('click', closePrivacyModalFunc);
    }

    // Close Privacy modal when clicking outside
    if (privacyModal) {
        privacyModal.addEventListener('click', function(e) {
            if (e.target === privacyModal) {
                closePrivacyModalFunc();
            }
        });
    }

    // Close Privacy modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && privacyModal.classList.contains('active')) {
            closePrivacyModalFunc();
        }
    });

    // Contact Information Modal functionality - REMOVED FROM THE SPARK BUTTON
    // const sparkBtns = Array.from(document.querySelectorAll('.navbar-links button, .mobile-menu-links button')).filter(btn => btn.textContent.trim() === 'The Spark');
    // const contactModal = document.getElementById('contactModal');
    // const closeContactModal = document.getElementById('closeContactModal');

    // function openContactModal() {
    //     contactModal.classList.add('active');
    //     document.body.style.overflow = 'hidden';
    // }

    // function closeContactModalFunc() {
    //     contactModal.classList.remove('active');
    //     document.body.style.overflow = '';
    // }

    // // Open Contact modal when any The Spark button is clicked
    // sparkBtns.forEach(btn => {
    //     btn.addEventListener('click', openContactModal);
    // });

    // // Close Contact modal when close button is clicked
    // if (closeContactModal) {
    //     closeContactModal.addEventListener('click', closeContactModalFunc);
    // }

    // // Close Contact modal when clicking outside
    // if (contactModal) {
    //     contactModal.addEventListener('click', function(e) {
    //         if (e.target === contactModal) {
    //             closeContactModalFunc();
    //         }
    //     });
    // }

    // // Close Contact modal with Escape key
    // document.addEventListener('keydown', function(e) {
    //     if (e.key === 'Escape' && contactModal.classList.contains('active')) {
    //         closeContactModalFunc();
    //     }
    // });

    // Personal Information Modal functionality
    const getStartedBtn = document.querySelector('.hero-btn');
    const applyNowBtn = document.querySelector('.apply-now-btn');
    const personalInfoModal = document.getElementById('personalInfoModal');
    const closePersonalInfoModal = document.getElementById('closePersonalInfoModal');
    const personalInfoForm = document.querySelector('.info-form');

    function openPersonalInfoModal() {
        personalInfoModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closePersonalInfoModalFunc() {
        personalInfoModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Open Personal Info modal when Get Started or Apply Now buttons are clicked
    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', openPersonalInfoModal);
    }
    if (applyNowBtn) {
        applyNowBtn.addEventListener('click', openPersonalInfoModal);
    }

    // Close Personal Info modal when close button is clicked
    if (closePersonalInfoModal) {
        closePersonalInfoModal.addEventListener('click', closePersonalInfoModalFunc);
    }

    // Close Personal Info modal when clicking outside
    if (personalInfoModal) {
        personalInfoModal.addEventListener('click', function(e) {
            if (e.target === personalInfoModal) {
                closePersonalInfoModalFunc();
            }
        });
    }

    // Close Personal Info modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && personalInfoModal.classList.contains('active')) {
            closePersonalInfoModalFunc();
        }
    });

    // Handle form submission
    if (personalInfoForm) {
        personalInfoForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(personalInfoForm);
            const data = Object.fromEntries(formData);
            
            // Here you would typically send the data to your server
            console.log('Form submitted:', data);
            
            // Show success message (you can customize this)
            alert('Thank you! Your information has been submitted successfully.');
            
            // Close the modal
            closePersonalInfoModalFunc();
            
            // Reset the form
            personalInfoForm.reset();
        });
    }
});
