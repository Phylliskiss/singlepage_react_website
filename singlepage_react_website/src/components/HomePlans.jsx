import React, { Component } from 'react'
import Card from './Card'

export default class HomePlans extends Component {
  render() {
    return (
       
         <div class="container-fluid">
        <div class="text-center myheader">
            <h4> HOMES & PLANS</h4>
        </div>
        <div className="container-fluid">
            <div className="row mycards">
                <Card title="Party House"  imgSrc="images/card4.jpeg" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea voluptates itaque odio ipsa maiores!"/>
                <Card title="Privacy House"  imgSrc="images/card1.jpeg" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea voluptates itaque odio ipsa maiores!"/>
                <Card title="VC Mansion"  imgSrc="images/card5.jpeg" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea voluptates itaque odio ipsa maiores!"/>
                <Card title="Infinity Pool House"  imgSrc="images/card2.webp" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea voluptates itaque odio ipsa maiores!"/>
            </div>
        </div>
    </div>
   
    )
  }
}
