// Chocolate Bars Entertainment — Site JS

// ---- Nav scroll effect ----
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// ---- Mobile nav toggle ----
const navToggle = document.getElementById('navToggle');
const navMobile = document.getElementById('navMobile');

navToggle.addEventListener('click', () => {
  navMobile.classList.toggle('open');
});

navMobile.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navMobile.classList.remove('open'));
});

// ---- Artist filter ----
const filterBtns = document.querySelectorAll('.filter-btn');
const artistCards = document.querySelectorAll('.artist-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    artistCards.forEach(card => {
      if (filter === 'all' || card.dataset.genre === filter) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// ---- Contact form ----
const form = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.style.opacity = '0';
  form.style.transform = 'translateY(-10px)';
  form.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

  setTimeout(() => {
    form.style.display = 'none';
    formSuccess.classList.add('visible');
  }, 300);
});

// ---- Scroll reveal ----
const observerOptions = {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
};

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.artist-card, .release-card, .stat-card, .value-item, .contact-item').forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

// Inject reveal CSS dynamically
const revealStyle = document.createElement('style');
revealStyle.textContent = `
  .reveal {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.55s ease, transform 0.55s ease;
  }
  .reveal.revealed {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(revealStyle);

// ---- Carousel: arrows + drag scroll ----
function initCarousel(grid) {
  const wrap = grid.closest('.carousel-wrap');
  const prev = wrap.querySelector('.carousel-prev');
  const next = wrap.querySelector('.carousel-next');

  function cardWidth() {
    const card = grid.querySelector('[class*="-card"]:not(.hidden)');
    if (!card) return 300;
    const gap = parseFloat(getComputedStyle(grid).gap) || 24;
    return card.offsetWidth + gap;
  }

  function updateArrows() {
    const atStart = grid.scrollLeft <= 4;
    const atEnd = grid.scrollLeft + grid.clientWidth >= grid.scrollWidth - 4;
    prev.classList.toggle('hidden', atStart);
    next.classList.toggle('hidden', atEnd);
    grid.classList.toggle('scrolled-left', !atStart);
  }

  prev.addEventListener('click', () => {
    grid.scrollBy({ left: -cardWidth(), behavior: 'smooth' });
  });
  next.addEventListener('click', () => {
    grid.scrollBy({ left: cardWidth(), behavior: 'smooth' });
  });

  grid.addEventListener('scroll', updateArrows);
  updateArrows();

  // Drag to scroll
  let isDragging = false, startX, startScroll;

  grid.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - grid.offsetLeft;
    startScroll = grid.scrollLeft;
    grid.classList.add('dragging');
  });

  window.addEventListener('mouseup', () => {
    if (!isDragging) return;
    isDragging = false;
    grid.classList.remove('dragging');
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - grid.offsetLeft;
    grid.scrollLeft = startScroll - (x - startX) * 1.2;
  });
}

document.querySelectorAll('.artists-grid, .releases-grid').forEach(initCarousel);

// ---- Active nav link on scroll ----
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === `#${current}` ? 'var(--gold)' : '';
  });
});
