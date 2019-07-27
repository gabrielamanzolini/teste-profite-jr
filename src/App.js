import React, { Component } from 'react';
import './css/style.css';
import Header from './components/header'
import Banner from './components/banner';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Banner/>
      </div>
    );
  }
}

export default App;
