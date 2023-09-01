const express = require('express');
const router = express.Router();
const getCar = require('../cheerio/getCar');

router.get('/:carQuery', (req, res) => {
    const [make, model] = req.params.carQuery.toLowerCase().split('-');
    
    const getCars = async () => {
        const data = await getCar(`https://www.carsguide.com.au/buy-a-car/${make}/${model}?sortBy=price&orderBy=asc`);
        
        res.json({data})
    }

    getCars();
})

module.exports = router;