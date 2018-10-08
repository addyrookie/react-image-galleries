import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Switch, Route, Link } from 'react-router-dom';
import SlideShow from './components/SlideShow'
import RandomizedGallery from './components/RandomizedGallery'
import RegularGallery from './components/RegularGallery'
import Header from './components/Header'


 
class App extends Component {
  render() {
    return (
    <div className="App" style={{backgroundColor: 'white'}}>
      <Header />
      <div>
      	<Switch>
          <Route path="/slideshow" component={SlideShow} />
  	 		  <Route path="/regulargallery" component={RegularGallery} />
          <Route path="/randomizedgallery" component={RandomizedGallery} />
      	</Switch>
      </div>

    </div>
    );
  }
}

export default App;
