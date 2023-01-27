var products = [
    {name: 'cucumber', type: 'vegetable', quantity: 10, price: 50 },
    {name: 'banana', type: 'fruit', quantity: 8, price: 10},
    {name: 'celery', type: 'vegetable', quantity: 5, price: 12},
    {name: 'orange', type: 'fruit', quantity:6, price: 24}
];

var filteredProducts = products.filter(function(product){
    return product.type==='vegetable' && product.quantity >0 && product.price >10;
})

console.log(filteredProducts);