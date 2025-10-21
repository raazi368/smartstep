// scripts.js
// SmartStep Academy Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('active');
        });
    }
    
    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    }
    
    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
    
    // Testimonial Slider
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    
    // Function to show a specific slide
    function showSlide(n) {
        // Hide all slides
        testimonialSlides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Remove active class from all dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Show the selected slide and activate its dot
        testimonialSlides[n].classList.add('active');
        dots[n].classList.add('active');
        
        currentSlide = n;
    }
    
    // Add click event to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });
    
    // Auto-advance testimonials
    function autoAdvance() {
        currentSlide = (currentSlide + 1) % testimonialSlides.length;
        showSlide(currentSlide);
    }
    
    // Start auto-advance if there are slides
    if (testimonialSlides.length > 0) {
        setInterval(autoAdvance, 5000); // Change slide every 5 seconds
    }
    
    // Form Validation and Submission
    const admissionsForm = document.getElementById('admissions-form');
    const contactForm = document.getElementById('contact-form');
    
    // Admissions Form Submission
    if (admissionsForm) {
        admissionsForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const courseInterest = document.getElementById('course-interest').value;
            
            if (!name || !email || !courseInterest) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // In a real application, you would send the form data to a server here
            // For this demo, we'll just show a success message
            alert('Thank you for your interest! We will contact you soon with more information.');
            admissionsForm.reset();
        });
    }
    
    // Contact Form Submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const name = document.getElementById('contact-name').value;
            const email = document.getElementById('contact-email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('contact-message').value;
            
            if (!name || !email || !subject || !message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // In a real application, you would send the form data to a server here
            // For this demo, we'll just show a success message
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
    
    // Scroll Animation for Elements
    function checkScroll() {
        const elements = document.querySelectorAll('.course-card, .value-card, .gallery-item');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Initialize elements with hidden state
    const animatedElements = document.querySelectorAll('.course-card, .value-card, .gallery-item');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Check scroll position on load and scroll
    window.addEventListener('load', checkScroll);
    window.addEventListener('scroll', checkScroll);
    
    // Header scroll effect
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
});