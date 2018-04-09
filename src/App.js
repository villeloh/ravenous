import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from './components/BusinessList/business-list';
import SearchBar from './components/SearchBar/search-bar';

class App extends Component {
  render() {
    return (

    <div className="App">
      <h1>Ravenous</h1>
      <SearchBar />
      <BusinessList />
    </div>
    );
  }
}

export default App;
