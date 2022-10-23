window.addEventListener('DOMContentLoaded',function(){
    document.querySelector('.mainImage').src = JSON.parse(localStorage.getItem('imageUrl'));
    document.querySelector('.mainInfoPrice').textContent = (JSON.parse(localStorage.getItem('price')));
    document.querySelector('.watchesName').textContent = (JSON.parse(localStorage.getItem('name')));
    document.querySelector('.buy').textContent = JSON.parse(localStorage.getItem('bag')).map(elem => elem.name).includes(document.querySelector('.watchesName').textContent) ? 'Убрать из корзины' : "В корзину";

    document.querySelector('.buy').addEventListener('click',function(){
        if(document.querySelector('.buy').textContent == 'В корзину'){
            let arr = {
                name: JSON.parse(localStorage.getItem('name')),
                imageUrl: JSON.parse(localStorage.getItem('imageUrl')),
                price: JSON.parse(localStorage.getItem('price'))
            };
            let bag = JSON.parse(localStorage.getItem('bag'));
            bag.push(arr);
            localStorage.setItem('bag', JSON.stringify(bag))
        }
        else{
            let bag = JSON.parse(localStorage.getItem('bag'));
            let filteredBag = bag.filter(elem => elem.name !== document.querySelector('.watchesName').textContent);
            localStorage.setItem('bag', JSON.stringify(filteredBag))
        }

        document.querySelector('.buy').textContent = (document.querySelector('.buy').textContent == 'В корзину') ? 'Убрать из корзины' : 'В корзину';
    });

    function checkCondition(){
        userServerData.forEach(watches => {
            let arr = userServerData.filter(watches => allServerData[watches.watches_id - 1].name == document.querySelector('.watchesName').textContent);
            (arr[0]) ? document.querySelector('.buy').textContent = 'Убрать из корзины' : document.querySelector('.buy').textContent = 'В корзину';
        });
    }
});