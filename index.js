
const express = require('express');
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/users', (req, res) => {
    res.send(user)
})


app.get('/', (req, res) => {
    res.send('look mama i can write won node now!!! ');
})
const user = [
    { id: 1, name: 'Forhad', Email: 'forhadbinamir@gmail.com' },
    { id: 2, name: 'hossain', Email: 'hossain@gmail.com' },
    { id: 3, name: 'rony', Email: 'ronybinamir@gmail.com' },
    { id: 4, name: 'kowser', Email: 'kowserbinamir@gmail.com' },
    { id: 5, name: 'hamid', Email: 'hamidbinamir@gmail.com' },
    { id: 6, name: 'Fomar', Email: 'omardbinamir@gmail.com' },
    { id: 7, name: 'Foomayrad', Email: 'omayrahadbinamir@gmail.com' },
]
app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const users = user.find(u => u.id === id)
    res.send(users)
})

app.get('/users', (req, res) => {

    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = user.filter(pd => pd.name.toLowerCase().includes(search))

    } else {
        res.send(user)
    }
})


app.post('/users', (req, res) => {
    console.log('request', req.body)
    const users = req.body;
    users.id = user.length + 1;
    user.push(users)
    res.send(users)

})

app.listen(port, () => {
    console.log('listening to port', port)
});