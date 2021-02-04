const db = require('./connection');
const { User, Brand, Product } = require("../models");

db.once('open', async () => {
    await Brand.deleteMany();

const brands = await Brand.insertMany([
    { name: 'Puma' },
    { name: 'Jordan' },
    { name: 'Adidas' },
    { name: 'Nike' },
]);

console.log('brands seeded')

await Product.deleteMany();

const products = await Product.insertMany([
    {
        name: 'Jordan 11 Retro Jubilee',
        description: 'All black upper on the Jordan 11 Model',
        image: 'images/shoe-1.jpg',
        brand: brands[1]._id,
        price: 220,
        quantity: 8
    },
    {
        name: 'Jordan 1 Retro Dark Mocha',
        description: 'Retro Jordan 1 with earthy colors',
        image: 'images/shoe-2.jpg',
        brand: brands[1]._id,
        price: 170,
        quantity: 6
    },
    {
        name: 'Jordan 1 Volt University Gold',
        description: 'Bright and vibrant take on the classic Jordan 1',
        image: 'images/shoe-3.jpg',
        brand: brands[1]._id,
        price: 170,
        quantity: 15
    },
    {
        name: 'Jordan 4 Retro Fire Red',
        description: 'Remastered retro Jordan 4 in white with red accents.',
        image: '/../images/shoe-4.jpg',
        brand: brands[1]._id,
        price: 200,
        quantity: 8
    },
    {
        name: 'Jordan 1 Pine Green Black',
        description: 'Jordan 1 with black and pine green upper',
        image: '/../images/shoe-5.jpg',
        brand: brands[1]._id,
        price: 170,
        quantity: 11
    },
    {
        name: 'Jordan 1 Court Purple',
        description: 'Jordan 1 with white and purple upper',
        image: '/../images/shoe-6.jpg',
        brand: brands[1]._id,
        price: 170,
        quantity: 6
    },
    {
        name: 'Nike Air Max 95 Neon',
        description: 'Gray and Neon green air max 95',
        image: '/../images/shoe-7.jpg',
        brand: brands[3]._id,
        price: 170,
        quantity: 9
    },
    {
        name: 'Nike Air Max 97 Neon Seoul',
        description: 'Black Air Max 97 with a twist',
        image: '/../images/shoe-8.jpg',
        brand: brands[3]._id,
        price: 170,
        quantity: 3
    },
    {
        name: 'Nike Air Max 1 Anniversary Royal',
        description: 'The original Air Max 1 sihlouette in white and red',
        image: '/../images/shoe-9.jpg',
        brand: brands[3]._id,
        price: 140,
        quantity: 12
    },
    {
        name: 'Nike Air Max 1 Anniversary Royal',
        description: 'The original Air Max 1 sihlouette in white and royal blue',
        image: '/../images/shoe-10.jpg',
        brand: brands[3]._id,
        price: 140,
        quantity: 16
    },
    {
        name: 'Nike React Element 87 Sail',
        description: 'Previous shoe of the year winner',
        image: '/../images/shoe-11.jpg',
        brand: brands[3]._id,
        price: 160,
        quantity: 4
    },
    {
        name: 'Nike React Element 87 Moss',
        description: 'Green tones on this see-through shoe',
        image: '/../images/shoe-12.jpg',
        brand: brands[3]._id,
        price: 160,
        quantity: 5
    },
    {
        name: 'Nike Dunk High Maize',
        description: 'Nike Dunks in black and yellow',
        image: '/../images/shoe-13.jpg',
        brand: brands[3]._id,
        price: 120,
        quantity: 9
    },
    {
        name: 'Nike Dunk High Michigan',
        description: 'Hightop Nike Dunks in University of Michigans class maize and blue',
        image: '/../images/shoe-14.jpg',
        brand: brands[3]._id,
        price: 120,
        quantity: 8
    },
    {
        name: 'Nike Dunk High Spartan Green',
        description: 'Michigan Spartans inspired green Dunk High',
        image: '/../images/shoe-15.jpg',
        brand: brands[3]._id,
        price: 120,
        quantity: 11
    },
    {
        name: 'Yeezy Boost 350 v2 Citrin',
        description: 'Yeezy Boost 350 v2 with a light-gray upper',
        image: '/../images/shoe-16.jpg',
        brand: brands[2]._id,
        price: 220,
        quantity: 7
    },
    {
        name: 'Yeezy Boost 350 v2 Cream',
        description: 'Off-white colored Yeezy 350 v2',
        image: '/../images/shoe-17.jpg',
        brand: brands[2]._id,
        price: 220,
        quantity: 12
    },
    {
        name: 'Adidas Yeezy Boost 350 v2 Earth',
        description: 'Earth and sand inspired version of the 350 v2 model',
        image: '/../images/shoe-18.jpg',
        brand: brands[2]._id,
        price: 220,
        quantity: 18
    },
    {
        name: 'Yeezy Boost 700 Inertia',
        description: 'Light blue colorway of the original Yeezy 700',
        image: '/../images/shoe-19.jpg',
        brand: brands[2]._id,
        price: 300,
        quantity: 7
    },
    {
        name: 'Yeezy 700 Mauve',
        description: 'Earth-toned Yeezy 700 sihlouette',
        image: '/../images/shoe-20.jpg',
        brand: brands[2]._id,
        price: 300,
        quantity: 5
    },
    {
        name: 'Adidas Ultra Boost 4.0 White',
        description: 'Ultra Boost running shoe with white upper',
        image: '/../images/shoe-21.jpg',
        brand: brands[2]._id,
        price: 180,
        quantity: 9
    },
    {
        name: 'Adidas Ultra Boost 1.0 Black',
        description: 'Ultra Boost running shoe with black upper',
        image: '/../images/shoe-22.jpg',
        brand: brands[2]._id,
        price: 200,
        quantity: 13
    },
    {
        name: 'Adidas Stan Smith White Green',
        description: 'Original Adidas sihlouette with green detailing',
        image: '/../images/shoe-23.jpg',
        brand: brands[2]._id,
        price: 60,
        quantity: 6
    },
    {
        name: 'Adidas Stan Smith White Navy',
        description: 'Original Adidas sihlouette with navy detailing',
        image: '/../images/shoe-24.jpg',
        brand: brands[2]._id,
        price: 60,
        quantity: 9
    },
    {
        name: 'Clyde Core Foil Mens Sneakers White',
        description: 'Classic white sneakers with black accent',
        image: '/../images/shoe-25.jpg',
        brand: brands[0]._id,
        price: 70,
        quantity: 12
    },
    {
        name: 'Clyde Core Foil Mens Sneakers Black',
        description: 'Classic black sneakers with white accent',
        image: '/../images/shoe-26.jpg',
        brand: brands[0]._id,
        price: 70,
        quantity: 9
    },
    {
        name: 'RS-Fast Metal v2 Sneakers Gold',
        description: 'Black and gold running shoes',
        image: '/../images/shoe-27.jpg',
        brand: brands[0]._id,
        price: 110,
        quantity: 7
    },
    {
        name: 'Fuse Training Shoes White',
        description: 'Lowtop white trainers',
        image: '/../images/shoe-28.jpg',
        brand: brands[0]._id,
        price: 90,
        quantity: 11
    },
    {
        name: 'Fuse Training Shoes Black',
        description: 'Lowtop black trainers',
        image: '/../images/shoe-29.jpg',
        brand: brands[0]._id,
        price: 90,
        quantity: 8
    },
    {
        name: 'Speedcat Motorsport Shoes Red',
        description: "Red athletic trainers",
        image: '/../images/shoe-30.jpg',
        brand: brands[0]._id,
        price: 90,
        quantity: 10
    }
]);


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
});


console.log('user seeded');

process.exit();

});