import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <section className="App">
          <section className="App-header-top"></section>
          <section className="App-header-content">
            <section className="App-header-content-search">
              <i className="material-icons">search</i>
              <input className="App-header-search-bar" type="search" placeholder="Search"/>
            </section>
            <section className="App-header-content-shopping-cart">
              <i className="material-icons">shopping_cart</i>
              <a href="#">Cart (<span>0</span>)</a>
              <a href="#">Checkout</a>
            </section>
          </section>
          <section className="App-header-title-and-subtitle-container">
            <section className="App-header-title-and-subtitle">
              <section className="App-header-title">Classic.</section>
            </section>
            <section className="App-header-white-space">
            </section>
          </section>
          <section className="App-nav-and-component-container">
            <ul className="App-nav">
              <li>Home</li>
              <li>Watches</li>
              <li>Glasses</li>
              <ul className="App-nav-social">
                <li>Fb</li>
                <li>IG</li>
                <li>Twit</li>
                <li>G+</li>
                <li>SC</li>
              </ul>
            </ul>
            <section className="App-component">
              <Switch> 
                <Route path="/" exact component={FeaturedItems} />
              </Switch>
            </section>
          </section> 
          <footer className="App-footer">
            Bitcoin, Ethereum, and PayPal accepted.
          </footer>
        </section>
      </Router>
    )
  }
}

export default App;
