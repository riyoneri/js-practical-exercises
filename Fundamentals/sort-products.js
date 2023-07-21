const sortProducts = arr => arr.sort((a, b) => a.price - b.price)

const products = [
    {
        name: 'orange',
        price: 15
    },
    {
        name: 'pineapple',
        price: 10
    },
    {
        name: 'cup',
        price: 6
    },
    {
        name: 'computer',
        price: 30
    },
    {
        name: 'phone',
        price: 13
    },
    {
        name: 'charger',
        price: 3
    },
]

console.log(sortProducts(products))