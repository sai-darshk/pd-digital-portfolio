const observer = new IntersectionObserver ((entries) => {
  entries.forEach((entry) => { 
    console.log(entry)
    if(entry.isIntersecting) {
      entry.target.classList.add('show');
  } else {
      entry.target.classList.remove('show');
      }
    });
  });

  const hiddenElements = document.querySelectorAll('.hidden') ;
  hiddenElements.forEach((el) => observer.observe (el));

  const navLinks = document.querySelectorAll('nav ul li a');

for (const link of navLinks) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });

  });
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}




