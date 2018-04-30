import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from './components/BusinessList/business-list';
import SearchBar from './components/SearchBar/search-bar';
import Yelp from './util/Yelp';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { businesses: [] };
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {

    Yelp.search(term, location, sortBy)
    .then(businesses => {

      this.setState({businesses: businesses});
    });
  }
  
  render() {
    return (

    <div className="App">
      <h1>Ravenous</h1>
      <SearchBar searchYelp={this.searchYelp}/>
      <BusinessList businesses={this.state.businesses}/>
    </div>
    );
  }
}

export default App;
