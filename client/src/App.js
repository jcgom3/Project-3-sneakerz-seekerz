import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'

import LandingPage from './components/LandingPage'
import Nav from "./components/Nav/index";
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Developers from './pages/Developers'
import ProductList from './components/ProductList'
import Footer from './components/Footer';
import Detail from './pages/Detail';
import Success from './pages/Success';
// import GridList from './components/GridList';



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
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path='/' component={LandingPage}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/signup' component={Signup}/>
            <Route exact path='/developers' component={Developers}/>
            <Route exact path='/productlist' component={ProductList}/>
            <Route exact path='/products/:id' component={Detail} />
            <Route ecact path='/success' component={Success} />
          </Switch>
          {/* <GridList /> */}
          <Footer></Footer>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;