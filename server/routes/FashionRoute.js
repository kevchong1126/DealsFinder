const express = require('express');
const router = express.Router();
const getShoeGrab = require('../cheerio/getShoeGrab');

router.get('/:fashionQuery', (req, res) => {

    const query = req.params.fashionQuery.toLowerCase().split('-').join('+');

    const getData = async () =>{
        const data = await getShoeGrab(`https://shoegrab.com.au/search?page=1&q=${query}&sort=price-ascending`);
        res.json({data});
    }
    
    getData();
})

module.exports = router;