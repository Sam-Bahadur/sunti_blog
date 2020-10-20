import Loading from "./components/Loading/Loading"
import "./App.module.css";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header"

import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super();
    this.state={
      isloading: true,
    }
  }
  
  render() {
    setTimeout(() => {
      this.setState({
        isloading: true,
      })
    }, 3000);
    return (
      this.state.isloading ? <Loading /> :
      <div className="App">
      <Header />
      <Body />
      {/* <Footer /> */}
    </div>  
    )
  }
}

