let modalWindowLink =  document.querySelector('.getModalWindow');
let modalWindowBackground = document.querySelector('.modalWindowBackground');
let modalWindow = document.querySelector('.modalWindow');
let closeModalWindowButton = document.querySelector('.closeModalWindow');
let modalWindowOpen = false;
modalWindowLink.addEventListener('click', () => {
    modalWindowBackground.classList.add('opened');
    modalWindow.classList.add('opened');
    document.querySelector('.mainLabel').classList.toggle('off');
    document.querySelector('.watchCollectionButton').classList.toggle('off');
    modalWindowOpen = true;
});
closeModalWindowButton.addEventListener('click', () => {
    closeModalWindow();
});
modalWindowBackground.addEventListener('click', (event) => {
    if(event.target.classList.contains('modalWindowBackground')){
        closeModalWindow();
    }
});
function closeModalWindow(){
    modalWindowBackground.classList.remove('opened');
    modalWindowBackground.classList.add('hide');
    modalWindow.classList.remove('opened');
    modalWindow.classList.add('hide');
    setTimeout(() => {
        modalWindow.classList.remove('hide');
        modalWindowBackground.classList.remove('hide');
    }, 800)
    modalWindowOpen = false
    document.querySelector('.mainLabel').classList.toggle('off');
    document.querySelector('.watchCollectionButton').classList.toggle('off');
}
