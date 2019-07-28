import React, { Component } from 'react';
import './css/style.css';
import Header from './components/header'
import Banner from './components/banner';
import Content from './components/content';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Banner/>
        <Content/>
        <Footer/>
      </div>
    );
  }
}

export default App;
