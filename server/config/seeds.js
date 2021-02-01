const db = require('./connection');
const { User, Brand, Product } = require("../models");

db.once('open', async () => {
    await Brand.deleteMany();
})

const brand = await Brand.insertMany([
    { name: 'Puma' },
    { name: 'Jordan' },
    { name: 'Adidas' },
    { name: 'Nike' },
]);

console.log('brand seeded')

await Product.deleteMany();

{
    name: 'Speedcat Motorsport Shoes Red',
    description: 'Lowtop',
    image: '/../images/shoe-30.jpg',
    brand: 'Puma',
    price: 90,
    quantity: 10
},

console.log('product seeded');

await User.deleteMany();

await User.create({
    firstName: 'Juan',
    lastName: 'Gomez',
    email: 'jgom@gmail.com',
    password: 'hello',
    orders: [{
        products: [products[0]._id, products[1]._id, products[2]._id]
    }]
});

await User.create({
    firstName: 'Jonny',
    lastName: 'Saunders',
    email: 'jsaun@gmail.com',
    password: 'hfida'
}]


    console.log('user seeded');

process.exit();

)};

