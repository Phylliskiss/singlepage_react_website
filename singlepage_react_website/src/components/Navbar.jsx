// rcc for class components code generation
import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light  mynav-bar">

        <a className="navbar-brand mynav"  href="/"><img src="images/homelogo.jpeg" className="img-fluid mylogo"/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="nav-m">
            <a className="nav-link" href="/">Sunset</a>
            <a className="nav-link" href="/">Florida</a>
            <a className="nav-link" href="/">Vancouver</a>
        </div>

        <div className="nav-l">
            <a className="nav-link" href="/">About Us</a>
        </div>
      </nav>
    );
  }
}
