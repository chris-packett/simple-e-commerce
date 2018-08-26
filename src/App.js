import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css';

import FeaturedItems from './Components/FeaturedItems'
import CategoryItems from './Components/CategoryItems'
import ItemDetail from './Components/ItemDetail'

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
              <li><Link to="/">Home</Link></li>
              <li><Link to="/watches">Watches</Link></li>
              <li><Link to="/glasses">Glasses</Link></li>
              <ul className="App-nav-social">
                <li><img src="/Images/facebook.png" alt="fb-logo"/></li>
                <li><img src="/Images/instagram.png" alt="ig-logo"/></li>
                <li><img src="/Images/twitter.png" alt="twitter-logo"/></li>
              </ul>
            </ul>
            <section className="App-component">
              <Switch> 
                <Route path="/" exact component={FeaturedItems} />
                <Route path="/:category" exact component={CategoryItems} />
                <Route path="/:category/:id" exact component={ItemDetail} />
              </Switch>
            </section>
          </section> 
          <footer className="App-footer">
            <ul className="App-footer-payments">
              <li><img src="/Images/bitcoin-logo.png" alt="bitcoin"/></li>
              <li><img src="/Images/ethereum.png" alt="eth"/></li>
              <li><img src="/Images/paypal-logo.png" alt="paypal"/></li>
            </ul>
          </footer>
        </section>
      </Router>
    )
  }
}

export default App;
