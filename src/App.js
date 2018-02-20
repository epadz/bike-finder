import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';
import './App.css';
import Home from './home';
import Listings from './listings';
import Product from './product';

export const HOME = 'HOME';
export const LISTINGS = 'LISTINGS';
export const PRODUCT = 'PRODUCT';

class App extends Component {
  constructor(props){
    super(props);
    this.setPage = this.setPage.bind(this);
    this.state = {
      page: HOME,
    }
  }

  setPage = page => this.setState({page});

  render() {
    return (
      <div className="App">
        <div className="header">
          <div className="logo">QuickCycle</div>
          <div className="search"><Glyphicon glyph="search" /></div>
          <div className="cart"><Glyphicon glyph="shopping-cart" /><div className="numItemsInCart">1</div></div>
        </div>
        <div className="content">
          {
            this.state.page === LISTINGS
                ? <Listings setPage={this.setPage} />
                : this.state.page === PRODUCT
                  ? <Product setPage={this.setPage} />
                  : <Home setPage={this.setPage} />
          }
        </div>
      </div>
    );
  }
}

export default App;
