import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './component/Main'
import Favorit from './component/Favorit'
import Footer from './component/Footer';
import Nav from './component/Nav';

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Main />
        <Favorit />
        <Footer/>
      </div>
    )
  }
}

export default App
