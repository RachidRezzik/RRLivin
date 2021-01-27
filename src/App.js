import './App.scss';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom'
//components
import Nav from './components/Nav'
import Home from './components/Home'
import Houses from './components/Houses'
import Apartments from './components/Apartments'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Apartments" component={Apartments} />
          <Route exact path="/Houses" component={Houses} />
        </Switch>
        <Footer />
      </HashRouter>
    
    </div>
  );
}

export default App;
