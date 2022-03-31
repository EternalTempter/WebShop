window.addEventListener('DOMContentLoaded',function(){
    document.querySelector('.mainImage').src = (JSON.parse(localStorage.getItem('imageUrl'))).substr(15);
    document.querySelector('.mainInfoPrice').textContent = (JSON.parse(localStorage.getItem('price')));
    document.querySelector('.watchesName').textContent = (JSON.parse(localStorage.getItem('name')));

    document.querySelector('.buy').addEventListener('click',function(){
        sendRequest(JSON.stringify({name: document.querySelector('.watchesName').textContent}));
    });

    async function sendRequest(content){
        return await fetch('ajax.php?do=putData', {
                    method: 'POST',
                    headers : {
                        "Content-Type": "application/json;charset=utf-8",
                    },
                    body: content
        })
        .then(response => response.json())
        .then(json => console.log(json));
    }
});