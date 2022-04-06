let modalWindowLink =  document.querySelector('.getModalWindow');
let modalWindowBackground = document.querySelector('.modalWindowBackground');
let modalWindow = document.querySelector('.modalWindow');
let authModalWindowBackground = document.querySelector('.authModalWindowBackground');
let authModalWindow = document.querySelector('.authModalWindow');
let closeModalWindowButton = document.querySelector('.closeModalWindow');
let closeAuthModalWindow = document.querySelector('.closeAuthModalWindow');
let modalWindowOpen = false;
modalWindowLink.addEventListener('click', () => {
    modalWindowBackground.classList.add('opened');
    modalWindow.classList.add('opened');
    document.querySelector('.banner').style.paddingBottom = '82.3vh';
    document.querySelector('.mainLabel').classList.toggle('off');
    document.querySelector('.watchCollectionButton').classList.toggle('off');
    modalWindowOpen = true;
    document.body.style.overflow = 'hidden';
});
document.querySelector('.enterAccount').addEventListener('click', function(){
    console.log('asdf');
    closeModalWindow(modalWindow,modalWindowBackground);
    setTimeout(() => {
        authModalWindowBackground.classList.add('opened');
        authModalWindow.classList.add('opened');
        document.querySelector('.banner').style.paddingBottom = '82.3vh';
        document.querySelector('.mainLabel').classList.toggle('off');
        document.querySelector('.watchCollectionButton').classList.toggle('off');
        modalWindowOpen = true;
        document.body.style.overflow = 'hidden';
    }, 400)
});
closeModalWindowButton.addEventListener('click', () => {
    closeModalWindow(modalWindow,modalWindowBackground);
    document.body.style.overflow = 'scroll';
});
modalWindowBackground.addEventListener('click', (event) => {
    if(event.target.classList.contains('modalWindowBackground')){
        closeModalWindow(modalWindow,modalWindowBackground);
        document.body.style.overflow = 'scroll';
    }
});
function closeModalWindow(currentModalWindow,currentModalWindowBackground){
    currentModalWindowBackground.classList.remove('opened');
    currentModalWindowBackground.classList.add('hide');
    currentModalWindow.classList.remove('opened');
    currentModalWindow.classList.add('hide');
    setTimeout(() => {
        currentModalWindow.classList.remove('hide');
        currentModalWindowBackground.classList.remove('hide');
    }, 800)
    modalWindowOpen = false
    document.querySelector('.banner').style.paddingBottom = '34vh';
    document.querySelector('.mainLabel').classList.toggle('off');
    document.querySelector('.watchCollectionButton').classList.toggle('off');
}
