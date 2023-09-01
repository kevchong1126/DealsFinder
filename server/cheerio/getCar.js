const cheerio = require('cheerio');
const axios = require('axios');

const headers = {
    headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
        "Accept-Encoding": "gzip, deflate",
        "Connection": "keep-alive",
        "Upgrade-Insecure-Requests": "1",
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "none",
        "Sec-Fetch-User": "?1",
        "Cache-Control": "max-age=0",
    }
};

const getCar = async (url) => {
    try{
        const response = await axios.get(url, headers);
        const data = response.data;
        const $ = cheerio.load(data);
        const arr = [];

        $('.listing-item').each((idx, el) => {
            const link = 'https://www.carsales.com.au' + $(el).find('.carousel.slide').attr('href');
            const image = $(el).find('.d-block.w-100').attr('src');
            const title = $(el).find('.col h3').text();
            const price = $(el).find('.price a').text();
            const odometer = $(el).find('.key-details__value:nth-child(1)').text();
            const body = $(el).find('.key-details__value:nth-child(2)').text();
            const transmission = $(el).find('.key-details__value:nth-child(3)').text();
            const engine = $(el).find('.key-details__value:nth-child(4)').text();
            const location = $(el).find('.seller-location').text();
            arr.push({link, image, title, price, odometer, body, transmission, engine, location})
        });

        return arr
    }
    catch (err){
        console.log(err.message)
    }
}

module.exports = getCar;