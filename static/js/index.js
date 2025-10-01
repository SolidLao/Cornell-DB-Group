// Cornell Database Group Website JavaScript

// Toggle publication year sections
function toggleYear(year) {
  const content = document.getElementById('year-' + year);
  const header = content.previousElementSibling;
  const icon = header.querySelector('.toggle-icon');

  if (content.style.display === 'none') {
    content.style.display = 'block';
    icon.textContent = '−';
  } else {
    content.style.display = 'none';
    icon.textContent = '+';
  }
}

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {
  // Add smooth scrolling to all links
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Add fade-in animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe all sections
  const sections = document.querySelectorAll('.section, .hero');
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);
  });
});

// Add accessibility features
document.addEventListener('keydown', function(e) {
  // Allow Enter key to toggle publication years
  if (e.key === 'Enter' && e.target.classList.contains('pub-year-header')) {
    e.target.click();
  }
});

// Add keyboard navigation for publication years
const pubHeaders = document.querySelectorAll('.pub-year-header');
pubHeaders.forEach(header => {
  header.setAttribute('tabindex', '0');
  header.setAttribute('role', 'button');
  header.setAttribute('aria-expanded', 'true');
});

// Update aria-expanded when toggling
window.addEventListener('click', function(e) {
  if (e.target.closest('.pub-year-header')) {
    const header = e.target.closest('.pub-year-header');
    const content = header.nextElementSibling;
    const isExpanded = content.style.display !== 'none';
    header.setAttribute('aria-expanded', isExpanded);
  }
});

console.log('Cornell Database Group website loaded successfully!');
