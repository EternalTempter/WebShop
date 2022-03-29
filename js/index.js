let serverData;
document.querySelector('.catalog').addEventListener('click',function(){
    fetch('data.json')
        .then(response => response.json())
        .then(json => setData(json));
    
        setTimeout(() => buildCards(serverData),100);
});
    
function setData(data){
    serverData = data;
}
    
function buildCards(data){
    let content = document.querySelector('.content');
        Array.from(Object.keys(data.catalog.rolex)).forEach(watchesName => {
            content.innerHTML += `<div class="card">
                <img src="${data.catalog.rolex[watchesName].imageUrl}">
                <h3>${watchesName}</h3>
                <p>${data.catalog.rolex[watchesName].desc}</p>
                <span>${data.catalog.rolex[watchesName].price}</span>
            </div>`;
        });
}
