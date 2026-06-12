// Menu toggle for small screens
document.addEventListener('DOMContentLoaded',()=>{
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();

  if(toggle && nav){
    toggle.addEventListener('click',()=>nav.classList.toggle('open'));
  }

  // Smooth scroll for in-page links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{
      const href = a.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        document.querySelector(href).scrollIntoView({behavior:'smooth'});
        if(nav.classList.contains('open')) nav.classList.remove('open');
      }
    })
  })

  // Simple contact form handler
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit',e=>{
      e.preventDefault();
      alert('Thanks! Your message has been received (demo).');
      form.reset();
    })
  }
});