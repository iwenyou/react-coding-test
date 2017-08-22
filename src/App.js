import React, { Component } from 'react';
import './App.css';

import SearchBar from './containers/search_bar';
import PhotoList from './containers/photo_list';

class App extends Component {
  render() {
    return (
      <div className="App">
        < SearchBar />
        < PhotoList />
      </div>
    );
  }
}

export default App;
