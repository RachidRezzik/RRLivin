import './App.scss';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom'
//components
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Houses from './components/Houses'
import Apartments from './components/Apartments'
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Apartments" component={Apartments} />
          <Route path="/Houses" component={Houses} />
          <Route path="/Contact" component={Contact} />
        </Switch>
        <Footer />
      </HashRouter>
    
    </div>
  );
}

export default App;
