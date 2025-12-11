// Smooth scroll
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior:'smooth' });
  });
});

// Simple form submit alert
document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you! Your message has been sent.');
});
