const cheerio = require('cheerio');
const axios = require('axios');

const getData = async (url) => {
    try{
        const response = await axios.get(url);
        const data = response.data;
        const $ = cheerio.load(data);
        const arr = [];

        $('.boost-pfs-filter-product-item-inner').each( (i, el) => {
            const link = 'https://shoegrab.com.au' + $(el).find('.boost-pfs-filter-product-item-image-link').attr('href');
            const image = 'https://' + $(el).find('img.boost-pfs-filter-product-item-main-image')
                            .attr('data-srcset').split(',')[2].replace(/ \/\//, '').replace(/ 540w/, '');
            const brand = $(el).find('.boost-pfs-filter-product-item-vendor').text();
            const title = $(el).find('.boost-pfs-filter-product-item-title').text();
            const price = $(el).find('.boost-pfs-filter-product-item-price').text();

            arr.push({link, image, brand, title, price});
        });

        return arr
    }catch (err){
        console.log(err.message)
    }
    
};

module.exports = getData;