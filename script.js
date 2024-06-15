document.addEventListener('DOMContentLoaded', () => {
  const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 1200, 
      speedAsDuration: true,
      easing: 'easeInOutCubic', 
      updateURL: false,  
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 1200,
      speedAsDuration: true,
      easing: 'easeInOutCubic',
      updateURL: false,
  });

  const sections = document.querySelectorAll('section');

  const options = {
      threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
          }
      });
  }, options);

  sections.forEach(section => {
      observer.observe(section);
  });
});

