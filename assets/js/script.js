// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    menuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
      menuBtn.classList.toggle('menu-open');
    });
    
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Add animation classes to elements when they enter viewport
    const animateOnScroll = function() {
      const elements = document.querySelectorAll('.course-card, .feature-card');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
        
        if(elementPosition < screenPosition) {
          element.classList.add('fade-in');
        }
      });
    };
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Run once on load
    animateOnScroll();
  });

  
  
  // Would add more JS here for a fully featured site:
  // - Form validation for login/register pages
  // - Course filtering functionality
  // - Progress tracking for courses
  // - Interactive elements for course content