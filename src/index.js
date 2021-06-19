function revealHamburger(delay = false) {
  const reveal = () => {
    doublem.classList.add('invisible');
    hamburger.classList.remove('invisible');
  }
  if (delay) setTimeout(reveal, 0);
  else reveal();
}

function hideHamburger() {
  setTimeout(() => {
    doublem.classList.remove('invisible');
    hamburger.classList.add('invisible');
  }, 1000);
}


window.addEventListener('load', () => {
  const menu = document.querySelector('#menu');
  const doublem = document.querySelector('#doublem');
  const hamburger = document.querySelector('#hamburger');

  console.log(menu, doublem, hamburger);

  const revealTimeout = setTimeout(hideHamburger, 3000);

  menu.addEventListener('mouseenter', () => {
    if (revealTimeout) clearTimeout(revealTimeout);
    revealHamburger(true);
  });

  menu.addEventListener('mouseleave', hideHamburger);
});