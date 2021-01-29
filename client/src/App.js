import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'

import Signup from './pages/Signup'
import Login from './pages/Login'


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
      <h1>Hello World</h1>
 <Switch>
   <Route exact path='/login' component={Login}/>
   <Route exact path='/signup' component={Signup}/>
 </Switch>
    </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;
