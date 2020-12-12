import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import {BrowserRouter as Router, Switch, Route,Redirect} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/pages/Home'
import Reports from './components/pages/Reports'
import Product from './components/pages/Product'
import Services from './components/pages/Services'
import Contact from './components/pages/Contact'
import Signup from './components/pages/Signup';
import {FooterContainer} from './container/footer'
import Login from './components/loginForm';





function App() {
  return (
    <>
    <Navbar/>
      <Router>
<Sidebar/>

<Switch>


  <Route exact path="/">
      <Login/>
  </Route>
  
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

