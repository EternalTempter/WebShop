window.addEventListener('DOMContentLoaded',function(){

    let allServerData;
    let userServerData;

    showDataOnPage();

    function showDataOnPage(){
        getAllData();
        getUserData();
        setTimeout(() => buildCards(),200);
    }
    function getAllData(){
        fetch('data.json')
            .then(response => response.json())
            .then(json => setAllData(json));
    }
    function getUserData(){
        fetch('shopBag.json')
            .then(response => response.json())
            .then(json => setUserData(json));
    }
    function setAllData(data){
        allServerData = data;
    }
    function setUserData(data){
        userServerData = data;
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