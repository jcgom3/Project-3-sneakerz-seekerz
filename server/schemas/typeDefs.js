const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type Brand {
        _id: ID
        name: String
    }

    type Product {
        _id: ID
        name: String
        description: String
        image: String
        price: Float
        quantity: Int
        brand: Brand
    }

    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
        orders: [Order]
    }

    type Auth {
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
        updateBrand(_id: ID!, name: String!): Brand
        updateCurrentBrand(_id: ID!, name: String!): Brand
        login(email: String!, password: String!): Auth
    }

    type Checkout {
        session: ID
    }
`;

module.exports = typeDefs;