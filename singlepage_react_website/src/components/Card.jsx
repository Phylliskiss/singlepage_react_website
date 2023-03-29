//class components uses this.props.name of prop short cut is rcc 
import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    return (
        
            <div className="card mycard" style={{width: "18rem"}}>
                    <img src={this.props.imgSrc} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">{this.props.title}</h5>
                      <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea voluptates itaque odio ipsa maiores!</p>
                        <a href="/" className="btn btn-primary mybutton">Click More</a>
                    </div>
                  </div>

    );
  }
}
