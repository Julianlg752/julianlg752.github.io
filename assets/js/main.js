// ==========================================
// Smooth Scrolling for Navigation Links
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      const targetPosition = target.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      // Close mobile menu if open
      const navMenu = document.getElementById('navMenu');
      const navToggle = document.getElementById('navToggle');
      if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
      }
    }
  });
});

// ==========================================
// Navbar Effects on Scroll
// ==========================================
let lastScroll = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  // Add scrolled class for styling
  if (currentScroll > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  
  lastScroll = currentScroll;
});

// ==========================================
// Mobile Menu Toggle
// ==========================================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (navMenu && navToggle) {
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
    }
  }
});

// ==========================================
// Intersection Observer for Animations
// ==========================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
    }
  });
}, observerOptions);

// Observe all sections and cards for scroll animations
document.addEventListener('DOMContentLoaded', () => {
  // Add scroll-reveal class to elements we want to animate
  const elementsToAnimate = [
    ...document.querySelectorAll('.skill-category'),
    ...document.querySelectorAll('.project-card'),
    ...document.querySelectorAll('.contact-link'),
    ...document.querySelectorAll('.about-text p')
  ];
  
  elementsToAnimate.forEach(el => {
    el.classList.add('scroll-reveal');
    observer.observe(el);
  });
});

// ==========================================
// Active Navigation Link Highlighting
// ==========================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveLink() {
  const scrollPosition = window.pageYOffset + 100;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
  
  // Special case for when at the top of the page
  if (window.pageYOffset < 100) {
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#home') {
        link.classList.add('active');
      }
    });
  }
}

// ==========================================
// Performance Optimization - Throttle Scroll
// ==========================================
function throttle(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply throttling to scroll-heavy functions
window.addEventListener('scroll', throttle(() => {
  updateActiveLink();
}, 100));

// Set initial active link
document.addEventListener('DOMContentLoaded', updateActiveLink);

// ==========================================
// Add Loading Animation to External Links
// ==========================================
document.querySelectorAll('a[target="_blank"]').forEach(link => {
  link.addEventListener('click', function(e) {
    // Add a subtle indication that link is being opened
    this.style.opacity = '0.7';
    setTimeout(() => {
      this.style.opacity = '1';
    }, 200);
  });
});

// ==========================================
// Keyboard Navigation Enhancement
// ==========================================
document.addEventListener('keydown', (e) => {
  // Close mobile menu on Escape key
  if (e.key === 'Escape' && navMenu.classList.contains('active')) {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
  }
});

// ==========================================
// Performance: Preload Critical Resources
// ==========================================
window.addEventListener('load', () => {
  // Mark page as fully loaded
  document.body.classList.add('loaded');
});

// ==========================================
// Handle Browser Back/Forward Navigation
// ==========================================
window.addEventListener('popstate', () => {
  updateActiveLink();
});

// ==========================================
// Console Message
// ==========================================
console.log('%c👋 Welcome to my portfolio!', 'font-size: 20px; color: #2563eb; font-weight: bold;');
console.log('%cInterested in the code? View the source on GitHub!', 'font-size: 14px; color: #a3a3a3;');
