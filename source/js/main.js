// disable links

const links = document.querySelectorAll('a');

const onLinkClick = (e) => {
  e.preventDefault();
}

links.forEach((link) => {
  link.addEventListener('click', onLinkClick);
});
