
export const sortShoes = arr => {
    const ans = [];

    for (let i = 0; i < arr.length; i++){
        
        const [_, singlePrice] = arr[i].price.replace(/[a-zA-Z]+/gi, '').split('$');

        arr[i].price = singlePrice;

        ans.push(arr[i]);
    }

    ans.sort((a,b) => parseFloat(a.price) - parseFloat(b.price));

    for (let i = 0; i < arr.length; i++){
        arr[i].price = '$' + arr[i].price;
    }

    return ans
}