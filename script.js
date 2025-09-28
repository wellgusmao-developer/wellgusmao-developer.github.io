// NAV TOGGLE & SMOOTH SCROLL & PRELOADER & REVEAL
document.addEventListener('DOMContentLoaded', () => {
  // Preloader
  const preloader = document.getElementById('preloader');
  window.setTimeout(()=> {
    if(preloader){ preloader.style.display = 'none'; }
  }, 600);

  // Year in footer
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  navToggle?.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close mobile menu on link click
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => {
      if(window.innerWidth <= 720) navLinks.classList.remove('open');
    });
  });

  // Smooth scroll (for anchor links)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if(href.startsWith('#')){
        e.preventDefault();
        const el = document.querySelector(href);
        if(el) el.scrollIntoView({ behavior:'smooth', block:'start' });
      }
    });
  });

  // Modal preview
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const modalClose = document.querySelector('.modal-close');
  window.openModalFromCard = function(btn){
    const img = btn.getAttribute('data-img');
    if(!img) return;
    modalImg.src = img;
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden','false');
  };
  modalClose?.addEventListener('click', ()=> {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden','true');
  });
  modal.addEventListener('click', (e) => {
    if(e.target === modal) { modal.style.display = 'none'; modal.setAttribute('aria-hidden','true'); }
  });

  // Intersection Observer for reveal animations
  const revealEls = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('active');
        obs.unobserve(entry.target);
      }
    });
  }, {threshold: 0.12});
  revealEls.forEach(el => obs.observe(el));
});
