window.addEventListener('DOMContentLoaded',function(){

    let serverData;

    showDataOnPage();

    function showDataOnPage(){
        getData();
        setTimeout(() => buildCards(),200);
    }
    function getData(){
        fetch('data.json')
            .then(response => response.json())
            .then(json => setData(json));
    }
    function setData(data){
        serverData = data;
    }
        
    function buildCards(){
        let content = document.querySelector('.contentWrap');
        content.innerHTML = '<h1>Корзина</h1>';
            Array.from(Object.keys(serverData.catalog.rolex)).forEach(watchesName => {
                content.innerHTML += 
                `<div class="shopCartItemLine"></div>
                <div class="shopCartItem">
                    <div class="shopCartItemHolder">
                        <img src="${serverData.catalog.rolex[watchesName].imageUrl}">
                    </div>
                    <div class="shopCartInfoHolder">
                        <h3>${watchesName}</h3>
                        <p>${serverData.catalog.rolex[watchesName].desc}</p>
                        <span>${serverData.catalog.rolex[watchesName].price}</span>
                        <div class="shopCartAmount">
                            <p>Количество</p>
                            <img src="images/minus.png">
                            <span>1</span>
                            <img src="images/plus.png">
                        </div>
                    </div>
                </div>`;
            });
    }
});