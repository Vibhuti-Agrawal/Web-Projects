let showBtn = document.querySelector('.show-products');
let list = document.querySelector('.product-list');
let addForm = document.querySelector('.add-product-form');
let updateForm = document.querySelector('.update-product-form');
let deleteForm = document.querySelector('.delete-product-form');

showBtn.addEventListener('click',function(){
    list.innerHTML ='';     //used to empty the list
    fetch('http://localhost:3000/products')
            .then((response)=>response.json())
            .then((data)=>{
                data.forEach((product) => {
                    let li = document.createElement('li');
                    li.textContent = `${product.id} - ${product.name} - $${product.price}`;
                    list.appendChild(li);
                });
            })
})

addForm.addEventListener('submit',function(e){
    e.preventDefault();
    fetch('http://localhost:3000/products',{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify({
            name: document.getElementById('add-product-name').value,
            price: document.getElementById('add-product-price').value,
        })
    }).then((response)=>response.text())
    .then((data)=> console.log(data));
})

updateForm.addEventListener('submit',function(e){
    e.preventDefault();
    let id = document.getElementById('update-product-id').value;
    fetch('http://localhost:3000/products/' + id,{
        method:'PUT',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify({
            price: document.getElementById('update-product-price').value,
        })
    }).then((response)=>response.text())
    .then((data)=> console.log(data));
})

deleteForm.addEventListener('submit',function(e){
    e.preventDefault();
    let id = document.getElementById('delete-product-id').value;
    fetch('http://localhost:3000/products/' + id,{
        method:'DELETE',
    }).then((response)=>response.text())
    .then((data)=> console.log(data));
})