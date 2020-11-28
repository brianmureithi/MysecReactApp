import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/pages/Home'
import Reports from './components/pages/Reports'
import Product from './components/pages/Product'
import Services from './components/pages/Services'
import Contact from './components/pages/Contact'
import Signup from './components/pages/Signup';
import {FooterContainer} from './container/footer'





function App() {
  return (
    <>
    <Navbar/>
      <Router>
<Sidebar/>
<Switch>
  <Route path='/'  exact  component={Home}/>
  <Route  path='/reports' component={Reports}/>
  <Route  path='/products' component={Product}/>
  <Route   path='/services' component={Services}/>
  <Route  path='/contact' component={Contact}/>
  <Route   path='/signup'component={Signup}/>
</Switch>
    </Router>
    <FooterContainer/> 
    </>
       
  );
}


export default App;

