// Smooth scrolling for anchor links (with offset for fixed header)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if(href.length > 1 && document.querySelector(href)) {
      e.preventDefault();
      const yOffset = -62; // adjust for header height
      const target = document.querySelector(href);
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  });
});

// Simple contact form handler (static only, no backend)
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const response = document.querySelector('.form-response');
  if(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      response.style.display = 'block';
      response.textContent = 'Thank you for reaching out! (Form submission is for demo; please email me directly.)';
      form.reset();
    });
  }
});
