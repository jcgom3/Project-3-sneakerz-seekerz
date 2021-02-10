import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'
import LandingPage from './components/LandingPage'
import Nav from "./components/Nav";
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Cart from './components/Cart';
import Developers from './pages/Developers/Developers'
import Footer from './components/Footer';
import ContactUs from './pages/ContactUs';
import ProductsPage from './components/ProductsPage'
import Detail from './pages/Detail';
import Success from './pages/Success';
import OrderHistory from './pages/OrderHistory/OrderHistory';

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql',
})

function App() {
  
  return (
    <ApolloProvider client={client}>
      <Router>
        <div id='page-container'>
          <div id="content-wrap" className="App">
            <Nav />
            <Cart /> 
            <Switch>
              <Route exact path='/' component={LandingPage}/>
              <Route exact path='/login' component={Login}/>
              <Route exact path='/signup' component={Signup}/>
              <Route exact path='/contact-us' component={ContactUs} />
              <Route exact path='/developers' component={Developers}/>
              <Route exact path='/products-page' component={ProductsPage} />
              <Route exact path='/products/:id' component={Detail} />
              <Route exact path="/orderHistory" component={OrderHistory} />
              <Route ecact path='/success' component={Success} />
            </Switch>
          </div>
          <Footer/>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;