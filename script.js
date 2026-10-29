/** Edit these two fields to activate the contact links. */
const portfolioConfig = {
  email: 'venkatpallantla54@gmail.com', // e.g. 'you@example.com'
  linkedin: 'https://www.linkedin.com/in/venkat-pallantla-676193251' // e.g. 'https://www.linkedin.com/in/your-profile/'
};

const nav = document.querySelector('#siteNav');
const toggle = document.querySelector('#menuToggle');
toggle.addEventListener('click', () => {
  const opened = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(opened));
  toggle.setAttribute('aria-label', opened ? 'Close navigation' : 'Open navigation');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Open navigation');
}));

document.querySelector('#year').textContent = new Date().getFullYear();
const copyEmail = document.querySelector('#copyEmail');
const linkedinLink = document.querySelector('#linkedinLink');
const contactNote = document.querySelector('#contactNote');
if (portfolioConfig.email) {
  copyEmail.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(portfolioConfig.email);
      contactNote.textContent = 'Email address copied to clipboard.';
    } catch {
      contactNote.textContent = `Email: ${portfolioConfig.email}`;
    }
  });
} else {
  copyEmail.disabled = true;
  copyEmail.title = 'Set your email address in script.js';
}
if (portfolioConfig.linkedin) {
  linkedinLink.href = portfolioConfig.linkedin;
  linkedinLink.target = '_blank';
  linkedinLink.rel = 'noopener noreferrer';
} else {
  linkedinLink.setAttribute('aria-disabled','true');
  linkedinLink.addEventListener('click', event => {
    event.preventDefault();
    contactNote.textContent = 'Set your LinkedIn profile URL in script.js to enable this link.';
  });
}

const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  });
}, { threshold: .11 }) : null;
document.querySelectorAll('.reveal').forEach(el => observer ? observer.observe(el) : el.classList.add('visible'));
