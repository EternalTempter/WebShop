let menuBtn = document.querySelector('.menuButton');
let burgerMenu = document.querySelector('.burgerMenu');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    burgerMenu.classList.add('openedBurgerMenu');
    document.querySelector('.mainLabel').classList.toggle('off');
    document.querySelector('.watchCollectionButton').classList.toggle('off');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    burgerMenu.classList.remove('openedBurgerMenu');
    document.querySelector('.mainLabel').classList.toggle('off');
    document.querySelector('.watchCollectionButton').classList.toggle('off');
    menuOpen = false;
  }
});