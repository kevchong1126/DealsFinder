const express = require('express');
const router = express.Router();
const getShoeGrab = require('../cheerio/getShoeGrab');

router.get('/', (req, res) => {

    const getData = async () =>{
        const data = await getShoeGrab('https://shoegrab.com.au/search?page=1&q=jordan&sort=price-ascending');
        res.json({data});
    }
    
    getData();
})

module.exports = router;