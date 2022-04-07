let menuBtn = document.querySelector('.menuButton');
let burgerMenu = document.querySelector('.burgerMenu');
let burgerLinks = document.querySelectorAll('.burgerMenuLink');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  (!menuOpen) ? openBurgerMenu() : closeBurgerMenu();
});
burgerLinks.forEach(link => {
  link.addEventListener('click',function(){
    closeBurgerMenu();
  });
});
function openBurgerMenu(){
  menuBtn.classList.add('open');
  if(location.href == 'http://webshop/main.html' || location.href == 'http://webshop/main.html#'){
    document.querySelector('.banner').style.paddingBottom = '82.3vh';
  }
  document.body.style.overflow = 'hidden';
  burgerMenu.classList.add('opened');
  if(location.href == 'http://webshop/main.html' || location.href == 'http://webshop/main.html#'){
    document.querySelector('.mainLabel').classList.toggle('off');
    document.querySelector('.watchCollectionButton').classList.toggle('off');
  }
  menuOpen = true;
}
function closeBurgerMenu(){
  menuBtn.classList.remove('open');
  if(location.href == 'http://webshop/main.html' || location.href == 'http://webshop/main.html#'){
    document.querySelector('.banner').style.paddingBottom = '34vh';
  }
  document.body.style.overflow = 'scroll';
  burgerMenu.classList.remove("opened")
  burgerMenu.classList.add("hide")
  setTimeout(() => {
    burgerMenu.classList.remove("hide")
  }, 800)
  menuOpen = false
  if(location.href == 'http://webshop/main.html' || location.href == 'http://webshop/main.html#'){
    document.querySelector('.mainLabel').classList.toggle('off');
    document.querySelector('.watchCollectionButton').classList.toggle('off');
  }
}