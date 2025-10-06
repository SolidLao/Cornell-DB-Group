// Cornell Database Group Website JavaScript

// ===== DATA LOADING =====
let galleryImages = [];

// Load JSON data
async function loadJSON(path) {
  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`Failed to load ${path}: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error loading ${path}:`, error);
    return null;
  }
}

// ===== RENDERING FUNCTIONS =====

// Render people section
async function renderPeople() {
  const data = await loadJSON('data/people.json');
  if (!data) return;

  // Render faculty
  const facultyGrid = document.getElementById('faculty-grid');
  if (facultyGrid) {
    facultyGrid.innerHTML = data.faculty.map(person => `
      <div class="person-card">
        <div class="person-image">
          <img src="${person.image}" alt="${person.name}" onerror="this.style.display='none'">
        </div>
        <div class="person-info">
          <h4 class="person-name">${person.website ? `<a href="${person.website}" target="_blank">${person.name}</a>` : person.name}</h4>
          <p class="person-role">Faculty</p>
        </div>
      </div>
    `).join('');
  }

  // Render PhD students
  const phdGrid = document.getElementById('phd-students-grid');
  if (phdGrid) {
    phdGrid.innerHTML = data.phd_students.map(person => `
      <div class="person-card-small">
        <div class="person-image-small">
          <img src="${person.image}" alt="${person.name}" onerror="this.style.display='none'">
        </div>
        <p class="person-name-small">${person.website ? `<a href="${person.website}" target="_blank">${person.name}</a>` : person.name}</p>
      </div>
    `).join('');
  }

  // Render PhD graduates
  const graduatesGrid = document.getElementById('phd-graduates-grid');
  if (graduatesGrid) {
    graduatesGrid.innerHTML = data.phd_graduates.map(person => `
      <div class="person-card-small">
        <div class="person-image-small">
          <img src="${person.image}" alt="${person.name}" onerror="this.style.display='none'">
        </div>
        <p class="person-name-small">${person.website ? `<a href="${person.website}" target="_blank">${person.name}</a>` : person.name} ${person.affiliation ? `<span class="person-affiliation">(${person.affiliation})</span>` : ''}</p>
      </div>
    `).join('');
  }

  // Render undergraduate students
  const undergradsGrid = document.getElementById('undergrads-grid');
  if (undergradsGrid) {
    undergradsGrid.innerHTML = data.undergraduate_students.map(person => `
      <div class="person-card-small"><p class="person-name-small">${person.name}</p></div>
    `).join('');
  }
}

// Render news section
async function renderNews() {
  const data = await loadJSON('data/news.json');
  if (!data) return;

  const newsList = document.getElementById('news-list');
  if (newsList) {
    newsList.innerHTML = data.map(item => `<li>${item.text}</li>`).join('');
  }
}

// Render projects section
async function renderProjects() {
  const data = await loadJSON('data/projects.json');
  if (!data) return;

  const projectsGrid = document.getElementById('projects-grid');
  if (projectsGrid) {
    projectsGrid.innerHTML = data.map(project => `
      <div class="project-card">
        <h4 class="project-title"><a href="${project.url}" target="_blank">${project.title}</a></h4>
        <p class="project-description">${project.description}</p>
      </div>
    `).join('');
  }
}

// Render publications section
async function renderPublications() {
  const data = await loadJSON('data/publications.json');
  if (!data) return;

  const pubsContainer = document.getElementById('publications-container');
  if (!pubsContainer) return;

  const years = Object.keys(data).sort((a, b) => b - a);

  pubsContainer.innerHTML = years.map((year, index) => {
    const isExpanded = index < 3; // First 3 years expanded by default
    const toggleIcon = isExpanded ? '−' : '+';
    const displayStyle = isExpanded ? 'block' : 'none';

    const publications = data[year].map(pub => {
      const links = pub.links && pub.links.length > 0
        ? ' [' + pub.links.map(link => `<a href="${link.url}" target="_blank">${link.type}</a>`).join('] [') + ']'
        : '';

      const award = pub.award ? ` <span class="award">${pub.award}</span>` : '';

      return `<li><strong>${pub.venue}${award}</strong> ${pub.title}. <em>${pub.authors}</em>.${links}</li>`;
    }).join('');

    return `
      <div class="pub-year-section">
        <div class="pub-year-header" onclick="toggleYear('${year}')">
          <h3 class="title is-3">${year} <span class="toggle-icon">${toggleIcon}</span></h3>
        </div>
        <div class="pub-year-content" id="year-${year}" style="display: ${displayStyle};">
          <ul class="pub-list">${publications}</ul>
        </div>
      </div>
    `;
  }).join('');

  // Add keyboard navigation for publication years after rendering
  setupPublicationAccessibility();
}

// Render gallery section
async function renderGallery() {
  const data = await loadJSON('data/gallery.json');
  if (!data) return;

  galleryImages = data; // Store for lightbox functionality

  const galleryGrid = document.getElementById('gallery-grid');
  if (galleryGrid) {
    galleryGrid.innerHTML = data.map((image, index) => `
      <div class="gallery-item" onclick="openLightbox(${index})">
        <img src="${image.src}" alt="${image.caption}" loading="lazy">
        <div class="gallery-overlay">
          <span class="gallery-caption">${image.caption}</span>
        </div>
      </div>
    `).join('');
  }
}

// ===== GALLERY LIGHTBOX FUNCTIONS =====

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

// ===== PUBLICATIONS TOGGLE FUNCTION =====

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

// ===== ACCESSIBILITY & INTERACTION =====

// Setup publication accessibility features
function setupPublicationAccessibility() {
  const pubHeaders = document.querySelectorAll('.pub-year-header');
  pubHeaders.forEach(header => {
    header.setAttribute('tabindex', '0');
    header.setAttribute('role', 'button');
    const content = header.nextElementSibling;
    const isExpanded = content.style.display !== 'none';
    header.setAttribute('aria-expanded', isExpanded);
  });
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
  // Allow Enter key to toggle publication years
  if (e.key === 'Enter' && e.target.classList.contains('pub-year-header')) {
    e.target.click();
  }

  // Lightbox navigation
  const lightbox = document.getElementById('lightbox');
  if (lightbox && lightbox.style.display === 'block') {
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      changeImage(-1);
    } else if (e.key === 'ArrowRight') {
      changeImage(1);
    }
  }
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

// ===== INITIALIZATION =====

// Smooth scroll for anchor links and initial setup
document.addEventListener('DOMContentLoaded', async function() {
  // Load all data and render sections
  await Promise.all([
    renderGallery(),
    renderNews(),
    renderPeople(),
    renderProjects(),
    renderPublications()
  ]);

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

  console.log('Cornell Database Group website loaded successfully!');
});
