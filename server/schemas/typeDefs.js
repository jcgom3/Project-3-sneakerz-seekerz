const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Product {
        _id: ID
        name: String
        brand: String
        sku: String
        price: Int
    }

    type Brand {
        _id: ID
        name: String
    }

    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
        orders: [Order]
    }

    type: Auth: {
        token: ID
        user: User
    }

    type Order {
        _id: ID
        purchaseDate: String
        products: [Product]
    }

    type Query {
        brands: [Brand]
        products(brand: ID, name: String): [Product]
        product(_id: ID!): Product
        user: User
        order(_id: ID!): Order
        checkout(products: [ID]!): Checkout
    }

    type Mutation {
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        addOrder(products: [ID]!): Order
        updateUser(firstName: String, lastName: String, email: String, password: String): User
        updateProduct(_id: ID!, quantity: Int!): Product
        login(email: String!, password: String!): Auth
    }

    type: Checkout {
        session: ID
    }
`;

module.exports = typeDefs;