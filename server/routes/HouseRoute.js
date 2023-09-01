const express = require('express');
const router = express.Router();
const getView = require('../cheerio/getView');

router.post('/:houseQuery', (req, res) => {
    
    const query = req.params.houseQuery.toLowerCase();

    const sendData = async () => {
        const data = await getView(`https://www.allhomes.com.au/sale/${query}`);

        res.json({data});
    }

    sendData();
});

module.exports = router;