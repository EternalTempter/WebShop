window.addEventListener('DOMContentLoaded',function(){

    buildCards();
        
    function buildCards(){
        let content = document.querySelector('.contentWrap');
        content.innerHTML = '<h1>Корзина</h1>';
        console.log(JSON.parse(localStorage.getItem('bag')));
        JSON.parse(localStorage.getItem('bag')).forEach(watches => {
            content.innerHTML += 
                `<div class="shopCartItemLine"></div>
                    <div class="shopCartItem">
                    <div class="shopCartItemHolder">
                        <img src="${watches.imageUrl}">
                    </div>
                    <div class="shopCartInfoHolder">
                        <h3>${watches.name}</h3>
                        <span id="watchesPrice">${watches.price}</span>
                        <div class="shopCartAmount">
                            <p>Количество</p>
                            <img src="images/minus.png" class="setMinus">
                            <span>1</span>
                            <img src="images/plus.png" class="setPlus">
                        </div>
                        <a class="removeFromShoppingCart">Удалить из корзины</a>
                    </div>
                </div>`;
        });

        content.innerHTML += '<div class="miniShopCartItemLine"></div>';
        content.innerHTML += `<p class="totalPriceWrap">Итого: <span class="totalPrice">${getSumOfAllWatches()} €</span></p>`;
        content.innerHTML += '<div class="orderButton">Заказать</div>';
        document.querySelectorAll('.setMinus').forEach(minus => {
            minus.addEventListener('click',function(){
                (Number(minus.nextElementSibling.textContent) > 1) ? minus.parentNode.previousElementSibling.textContent = (Number(minus.parentNode.previousElementSibling.textContent.replace(' €','').replace(' ',''))) - (Number(minus.parentNode.previousElementSibling.textContent.replace(' €','').replace(' ','')) / Number(minus.nextElementSibling.textContent)) + ' €' : (Number(minus.parentNode.previousElementSibling.textContent.replace(' €','').replace(' ','')));
                minus.nextElementSibling.textContent = 
                        (Number(minus.nextElementSibling.textContent) > 1) 
                        ? (Number(minus.nextElementSibling.textContent) - 1) 
                        : Number(minus.nextElementSibling.textContent);
                document.querySelector('.totalPrice').textContent = `${getSumOfAllWatches()} €`;
            });
        });
        document.querySelectorAll('.setPlus').forEach(plus => {
            plus.addEventListener('click',function(){
                (Number(plus.previousElementSibling.textContent) < 10) ? plus.parentNode.previousElementSibling.textContent = (Number(plus.parentNode.previousElementSibling.textContent.replace(' €','').replace(' ',''))) + (Number(plus.parentNode.previousElementSibling.textContent.replace(' €','').replace(' ','')) / Number(plus.previousElementSibling.textContent)) + ' €' : (Number(plus.parentNode.previousElementSibling.textContent.replace(' €','').replace(' ','')));
                plus.previousElementSibling.textContent = 
                    (Number(plus.previousElementSibling.textContent) < 10) 
                    ? (Number(plus.previousElementSibling.textContent) + 1) 
                    : Number(plus.previousElementSibling.textContent);
                document.querySelector('.totalPrice').textContent = `${getSumOfAllWatches()} €`;
            });
        });
        document.querySelectorAll('.removeFromShoppingCart').forEach(button =>{
            button.addEventListener('click',function(){
                let bag = JSON.parse(localStorage.getItem('bag'));
                let filteredBag = bag.filter(elem => elem.name !== button.parentNode.parentNode.childNodes[3].childNodes[1].textContent);
                localStorage.setItem('bag', JSON.stringify(filteredBag))

                document.querySelector('.contentWrap').removeChild(button.parentNode.parentNode.previousElementSibling);
                document.querySelector('.contentWrap').removeChild(button.parentNode.parentNode);

                document.querySelector('.totalPrice').textContent = `${getSumOfAllWatches()} €`;
            })
        });
    }
    function getSumOfAllWatches(){
        let total = 0;
        document.querySelectorAll('#watchesPrice').forEach(watchesPrice => {
            total += ((Number(watchesPrice.textContent.replace(' €','').replace(' ','')) / Number(watchesPrice.nextElementSibling.childNodes[5].textContent)) * (Number(watchesPrice.nextElementSibling.childNodes[5].textContent))); 
        });
        return total;
    }
});