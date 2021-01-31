import './App.scss';
import React, {useEffect, useState} from 'react'
import {
  HashRouter,
  Route,
  Switch,
  withRouter
} from 'react-router-dom'
//components
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import HousesApartments from './components/HousesApartments'
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
          <Route path="/Apartments" component={HousesApartments} />
          <Route path="/Houses" component={HousesApartments} />
          <Route path="/Contact" component={Contact} />
        </Switch>
        <Footer />
      </HashRouter>
    
    </div>
  );
}

export default App;
