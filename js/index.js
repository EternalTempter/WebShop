let serverData;
document.querySelector('.cartierCategoryButton').addEventListener('click',function(){
    showDataOnPage('cartier',document.querySelector('.cartierCategoryButton'));
});
document.querySelector('.tissotCategoryButton').addEventListener('click',function(){
    showDataOnPage('tissot',document.querySelector('.tissotCategoryButton'));
});
document.querySelector('.rolexCategoryButton').addEventListener('click',function(){
    showDataOnPage('rolex',document.querySelector('.rolexCategoryButton'));
});
document.querySelector('.omegaCategoryButton').addEventListener('click',function(){
    showDataOnPage('omega',document.querySelector('.omegaCategoryButton'));
});
document.querySelector('.breguetCategoryButton').addEventListener('click',function(){
    showDataOnPage('breguet',document.querySelector('.breguetCategoryButton'));
});

function showDataOnPage(watchesModel,buttonToTurnOn){
    getData();
    setTimeout(() => buildCards(serverData,watchesModel),200);
    document.querySelectorAll('.categoryButton').forEach(button => {
        button.classList.remove('on');
    });
    buttonToTurnOn.classList.add('on');
}
function getData(){
    fetch('data.json')
        .then(response => response.json())
        .then(json => setData(json));
}
function setData(data){
    serverData = data;
}
    
function buildCards(data,watchesModel){
    let content = document.querySelector('.content');
    content.innerHTML = '';
        Array.from(Object.keys(data.catalog[watchesModel])).forEach(watchesName => {
            content.innerHTML += 
            `<div class="card">
                <img src="${data.catalog[watchesModel][watchesName].imageUrl}">
                <h3>${watchesName}</h3>
                <p>${data.catalog[watchesModel][watchesName].desc}</p>
                <span>${data.catalog[watchesModel][watchesName].price}</span>
            </div>`;
        });
}
