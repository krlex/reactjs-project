import React, { Component } from 'react';
import Footer from './components/Footer'
import Header from './components/Header'
import MainContent from './components/MainContent'
import ToDoApp from './components/ToDoApp'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainContent />
        <ToDoApp/>
        <Footer />
      </div>
    );
  }
}

export default App;
