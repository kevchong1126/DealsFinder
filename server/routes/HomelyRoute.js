const express = require('express');
const router = express.Router();
const getHomely = require('../cheerio/getHomely');

router.get('/', (req, res) => {

    const sendData = async () => {

        const data = await getHomely('https://www.allhomes.com.au/sale/sydney-nsw-2000');

        res.json({data})
    }

    sendData();
})

module.exports = router; 