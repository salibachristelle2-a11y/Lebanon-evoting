// script.js - Lebanese Elections 2026 Website

// Smooth scroll functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Button hover effects
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.05)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});

// Circular element click handler
const circularElement = document.querySelector('.circular-element');
if (circularElement) {
    circularElement.addEventListener('click', () => {
        console.log('Circular element clicked');
        // Add your functionality here
        alert('Get in touch with us!');
    });
}

// Primary button click handler
const primaryBtn = document.querySelector('.btn-primary');
if (primaryBtn) {
    primaryBtn.addEventListener('click', () => {
        console.log('Primary button clicked - Start Elections');
        // Redirect to voting page or start process
        // window.location.href = '/voting';
    });
}

// Secondary button click handler
const secondaryBtn = document.querySelector('.btn-secondary');
if (secondaryBtn) {
    secondaryBtn.addEventListener('click', () => {
        console.log('Secondary button clicked - View Results');
        // Redirect to results page
        // window.location.href = '/results';
    });
}

// Navbar active link tracking
window.addEventListener('scroll', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log('Lebanese Elections 2026 Website Loaded');
    
    // Add any initialization code here
    // e.g., API calls, data loading, etc.
});