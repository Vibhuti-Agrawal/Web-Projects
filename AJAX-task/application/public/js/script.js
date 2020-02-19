let btn = document.querySelector('.btn');
let postbtn = document.querySelector('.post');
let updateBtn = document.querySelector('.update');
let deleteBtn = document.querySelector('.delete');

btn.addEventListener('click',function(){
    fetch('http://localhost:3000/users/2')
                    .then((response)=>response.json())
                    .then((data)=> console.log(data));
})

postbtn.addEventListener('click',function(){
    fetch('http://localhost:3000/users/',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Accept':'text/plain'
        },
        body:JSON.stringify({
            login:'Nancy',
            age:20
        })
    }).then((response) => response.text())
    .then((data)=>console.log(data));
})

updateBtn.addEventListener('click',function(){
    fetch('http://localhost:3000/users/1',{
        method:'PUT',
        headers:{
            'Content-Type':'application/json',
            'Accept':'text/plain'
        },
        body:JSON.stringify({
            age:21
        })
    }).then((response) => response.text())
    .then((data)=>console.log(data));
})

deleteBtn.addEventListener('click',function(){
    fetch('http://localhost:3000/users/1',{
        method:'DELETE',
    }).then((response) => response.text())
    .then((data)=>console.log(data));
})