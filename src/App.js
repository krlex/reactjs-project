import React, { Component } from 'react';
import Footer from './components/landing/Footer'
import Header from './components/landing/Header'
import MainContent from './components/landing/MainContent'
import ToDoApp from './components/todo/ToDoApp'
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
