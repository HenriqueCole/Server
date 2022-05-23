const express = require('express')
const app = express();
const port = 3000;
app.use(express.json());

app.use(function(req, res, next) {
    console.log(req.originalUrl)
    next();
})

const listUsers = [
    { 
        id: 1,
        nome: 'Aluno 1',
    },
    { 
        id: 2,
        nome: 'Aluno 2',
    },
    { 
        id: 3,
        nome: 'Aluno 3',
    },
]

app.post('/api/users', (req, res) => {
    const user = req.body;
    user.id = listUsers.length + 1;
    listUsers.push(user);
    res.json(user)
});

app.put('/api/users/:id', (req, res) =>{
    const id = req.params.id;
    const user = req.body;
    const index = listUsers.findIndex(p => p.id == id);
    listUsers[index] = user;
    res.json(user);
})

app.get('/api/users/:id', (req, res) =>{
    const id = req.params.id;
    const user = listUsers.find(p => p.id == id);
    res.json(user)
})

app.delete('/api/users/:id', (req, res) =>{
    const id = req.params.id;
    const index = listUsers.findIndex(p => p.id == id);
    listUsers.splice(index, 1);
    res.json(user);
})

app.get('/api/users', (req, res) => {   
     
    res.json(listUsers)
})

app.listen(port, () => {
    console.log("example app listening at https://localhost:3000")
})
