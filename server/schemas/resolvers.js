const { AuthenticationError } = require('apollo-server-express');
const { User, Product, Brand, Order } = require('../models');
// const { signToken } = require('../utils/auth');

const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc')

const resolvers = {
    Query: {
        checkout: async (parent, args, context) => {
            const url = new URL(context.headers.referer).origin;

            const order = new Order({ products: args.products });
            const { products } = await order.populate('products').execPopulate();

            const line_items = [];

            for (let i = 0; i < products.length; i++) {
                // generate product id
                const product = await stripe.products.create({
                    name: products[i].name,
                    description: products[i].description,
                    images: [`${url}/images/${products[i].image}`]
                });
                // generate price id using the procuct id
                const price = await stripe.prices.create({
                    product: product.id,
                    unit_amount: products[i].price * 100,
                    currency: 'usd'
                });
                // add price id to the line items array
                line_items.push({
                    price: price.id,
                    quantity: 1
                });
            }
            const session = await stripe.checkout.session.create({
                payment_menthod_types: ['card'],
                line_items,
                mode: 'payment',
                success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${url}/`
            });
            return { session: session.id };
        }
    }

}

module.exports = resolvers;