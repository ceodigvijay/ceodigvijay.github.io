import Header from "./header";
import Project from "./Project";
import Footer from "./Footer";
import Skills from "./Skills";
import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
        <div className="App">
        <Header />
        <Project />
        <Skills />
        <Footer />

    </div>
    )
  }
}
