const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

if(!(shoppingCart.includes('Meat') || shoppingCart.includes('meat'))){
    shoppingCart.unshift('Meat');
    console.log(shoppingCart);
} else {
    console.log("Item already present in the Cart");
}

if(!(shoppingCart.includes('Sugar') || shoppingCart.includes('sugar'))){
    shoppingCart.push('Sugar');
    console.log(shoppingCart);
} else {
    console.log("Item already present in the Cart");
}

if(shoppingCart.includes('Honey') || shoppingCart.includes('honey')){
    shoppingCart.splice(-2,1);
    console.log(shoppingCart);
} else {
    console.log("Item doesn't exist in the Cart");
}


if(shoppingCart.includes('Tea') || shoppingCart.includes('tea')){
    shoppingCart.splice(-2,1,"Green Tea");
    console.log(shoppingCart);
} else {
    console.log("Item doesn't exist in the Cart");
}