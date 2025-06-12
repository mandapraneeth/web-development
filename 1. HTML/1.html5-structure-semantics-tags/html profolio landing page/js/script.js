// Example: Smooth scroll for internal links with data-scroll attribute
document.querySelectorAll('a[data-scroll="true"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
  });
});

