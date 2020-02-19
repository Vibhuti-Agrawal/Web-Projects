let express  =  require('express');
let app = express();

app.use(express.static('public'));
app.use(express.json());
let users = [];
let id = 1;

app.get('/users/:id',(req,resp)=>{
    let user = getUSerById(req.params.id);
    resp.send(user);
    })

app.post('/users',(req,resp)=>{
    let newUser = req.body;
    newUser.id = id;
    id++;
    users.push(newUser);
    resp.send('Created!');
})

app.put('/users/:id',(req,resp)=>{
    let user = getUSerById(req.params.id);
    if(!user){
        resp.send("Rejected!");
    }else{
        let data = req.body;
        for(let key in data){
            user[key] = data[key]
        }
        resp.send("Updated!!");
    }
})

app.delete('/users/:id',(req,resp)=>{
    let user = getUSerById(req.params.id);
    if(user){
        users.splice(users.indexOf(user),1);
        resp.send("Removed!!")
    }else{
        resp.send("Rejected!!")
    }
})

function getUSerById(id){
    id = +id;
    for(let i = 0 ; i < users.length ; i++){
        if(users[i].id === id){
            return users[i];
        }
    }
    return null;
}


app.listen('3000',()=>{
    console.log("Listening 3000...");
})