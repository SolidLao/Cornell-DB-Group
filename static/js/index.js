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

// Gallery images data
const galleryImages = [
  { src: 'static/images/life/retreat-24.jpg', caption: 'Retreat 2024' },
  { src: 'static/images/life/retreat-24-ball.jpg', caption: 'Retreat 2024 - Ball Game' },
  { src: 'static/images/life/retreat-25.jpg', caption: 'Retreat 2025' },
  { src: 'static/images/life/saehan-graduation.jpg', caption: "Saehan's Graduation" },
  { src: 'static/images/life/sigmod-group.jpg', caption: 'SIGMOD - Group Photo' },
  { src: 'static/images/life/sigmod-jiale-immanuel.jpg', caption: 'SIGMOD - Jiale & Immanuel' }
];

let currentImageIndex = 0;

// Open lightbox with specific image
function openLightbox(index) {
  currentImageIndex = index;
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');

  lightbox.style.display = 'block';
  lightboxImg.src = galleryImages[index].src;
  lightboxCaption.textContent = galleryImages[index].caption;

  // Prevent body scroll when lightbox is open
  document.body.style.overflow = 'hidden';
}

// Close lightbox
function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.style.display = 'none';

  // Re-enable body scroll
  document.body.style.overflow = 'auto';
}

// Change image in lightbox (next/previous)
function changeImage(direction) {
  currentImageIndex += direction;

  // Wrap around
  if (currentImageIndex >= galleryImages.length) {
    currentImageIndex = 0;
  } else if (currentImageIndex < 0) {
    currentImageIndex = galleryImages.length - 1;
  }

  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');

  lightboxImg.src = galleryImages[currentImageIndex].src;
  lightboxCaption.textContent = galleryImages[currentImageIndex].caption;
}

// Keyboard navigation for lightbox
document.addEventListener('keydown', function(e) {
  const lightbox = document.getElementById('lightbox');
  if (lightbox.style.display === 'block') {
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      changeImage(-1);
    } else if (e.key === 'ArrowRight') {
      changeImage(1);
    }
  }
});

console.log('Cornell Database Group website loaded successfully!');
