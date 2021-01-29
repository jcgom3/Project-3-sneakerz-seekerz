import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'

import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'


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
import Nav from "./components/Nav/index";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home'
import developers from './pages/Developers'
import Products from './pages/Products'
import Developers from './pages/Developers';

function App() {
  

  return (
    <ApolloProvider client={client}>
      <Router>
    <div className="App">
      <h1>Hello World</h1>
        <Nav />
        <Switch>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/signup' component={Signup}/>
          <Route path='/' exact component={Home}/>
          <Route path='/developers' component={Developers}/>
          <Route path='/products' component={Products}/>
        </Switch>
    </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;
