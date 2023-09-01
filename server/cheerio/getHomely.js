const cheerio = require('cheerio');
const axios = require('axios');

const headers = {
    headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:98.0) Gecko/20100101 Firefox/98.0",
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

const getHomely = async (url) => {
    
    try{
        const response = await axios.get(url, headers);
        const data = response.data;
        const $ = cheerio.load(data);
        const arr = [];
        
        $('.css-1r6lu77').each( (idx, el) => {
            const image = $(el).find(`.css-pyba50`).attr('src');
            const link = $(el).find('.css-126v74f').attr('href');
            const price = $(el).find('.css-abwyzf').text();
            const location = $(el).find('.css-1e8fm0h span').text();
            const bedroom = $(el).find('.css-unfz53 .css-ct9q29:nth-child(1) .css-rhetjd').text();
            const bathroom = $(el).find('.css-unfz53 .css-ct9q29:nth-child(2) .css-rhetjd').text();
            const car = $(el).find('.css-unfz53 .css-ct9q29:nth-child(3) .css-rhetjd').text();
            const type = $(el).find('.css-dg6k3i').text();

            arr.push({link, image, price, location, bedroom, bathroom, car, type}); 
        });
        
        return arr
    }
    catch (err){
        if (err.response){
            return err.message
        }
    }
    
    
}

module.exports = getHomely;