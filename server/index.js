const express = require('express');
const app = express();
const PORT = 5000;

const houseRoute = require('./routes/HouseRoute');
const homelyRoute = require('./routes/HomelyRoute');
const shoeGrabRoute = require('./routes/shoeGrabRoute');
const fashionRoute = require('./routes/FashionRoute');
const carRoute = require('./routes/carRoute');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('index');
})

app.use('/home', homelyRoute);

app.use('/houses', houseRoute);

app.use('/shoe', shoeGrabRoute);

app.use('/fashion', fashionRoute);

app.use('/cars', carRoute);

app.listen(PORT, (req, res) => {
    console.log('listening');
})