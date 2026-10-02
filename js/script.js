const navHeader = document.getElementById('siteNav');
  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');
  const links = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    navHeader.classList.toggle('scrolled', window.scrollY > 40);

    let current = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      if (window.scrollY >= top) current = sec.id;
    });
    links.forEach(l => {
      l.classList.toggle('active', l.getAttribute('href') === '#' + current);
    });
  });

  burger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  links.forEach(l => l.addEventListener('click', () => navLinks.classList.remove('open')));