const express = require('express');
const router = express.Router();
const getCar = require('../cheerio/getCar');

router.get('/:carQuery', (req, res) => {
    const [make, model] = req.params.carQuery.toLowerCase().split('-');
    
    const getCars = async () => {
        const data = await getCar(`https://www.carsales.com.au/cars/${make}/${model}/?sort=~Price`);
        
        res.json({data})
    }

    getCars();
})

module.exports = router;