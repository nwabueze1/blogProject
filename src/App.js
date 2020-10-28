import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './containers/Home';
import Header from './components/Header';
import Hero from './components/Hero';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ContactUs from './containers/Contact Us';
import Post from './containers/Post';

function App() {
  return (
    <Router>
        <div className="App">
           <Header></Header>
          <Hero/>
          <Route path='/' exact component={Home}></Route> 
          <Route path="/contact-us" component={ContactUs}></Route> 
          <Route path="/post/:postId"  component={Post}></Route>
    </div>
    </Router>
    
  );
}

export default App;
