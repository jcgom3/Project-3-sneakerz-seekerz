import gql from 'graphql-tag';

export const QUERY_PRODUCTS = gql`
  query getProducts($brand: ID) {
    products(brand: $brand) {
      _id
      name
      description
      price
      quantity
      image
      brand {
        _id
      }
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      description
      price
      quantity
      brand {
        name
      }
    }
  }
`;

export const QUERY_BRANDS = gql`
{
  brands {
    _id
    name
  }
}
`;

export const QUERY_USER = gql`
{
  user {
    firstName
    lastName
    email
    
    orders {
      _id
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        image
      }
    }
  }
}
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;