let stockItem = {
    id: '200435', 
    place: 'Koroglu Rehimov', 
    weight: '33kg' 
};

console.log(stockItem);

let shopItem = {
    id: stockItem.id,
    weight: stockItem.weight,
    price: '50 manat' 
};

console.log(shopItem);

let newShopItem = {
    id: stockItem.id,
    weight: stockItem.weight,
    price: '50 manat'  
};

console.log(newShopItem);


