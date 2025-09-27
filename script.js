const form = document.getElementById('contactForm');
form.addEventListener('submit', e => {
  e.preventDefault();
  alert('Форма отправлена!');
  form.reset();
});

document.querySelectorAll('.header__link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({behavior: 'smooth'});
  });
});

document.querySelectorAll('.faq__item h3').forEach(q => {
  q.addEventListener('click', () => {
    const p = q.nextElementSibling;
    p.style.display = p.style.display === 'block' ? 'none' : 'block';
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('show');
  });
}, {threshold: 0.2});

document.querySelectorAll('.animate').forEach(el => observer.observe(el));
