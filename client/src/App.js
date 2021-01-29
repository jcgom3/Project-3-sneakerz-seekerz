import './App.css';
import Nav from "./components/Nav/index";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home'
import developers from './pages/Developers'
import Products from './pages/Products'
import Developers from './pages/Developers';

function App() {
  

  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/developers' component={Developers}/>
          <Route path='/products' component={Products}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
