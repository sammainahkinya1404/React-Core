import { Component } from "react";
import './personStyle.css'

export default class Person extends Component{
  render(){
    return(
      <>
      <div className="Navbar">
        <ul>
          <li className="items"> <a href="#">Home</a></li>
          <li className="items"><a href="#">Projects</a></li>
          <li className="items"><a href="#">Contacts</a></li>
          <li className="items"><a href="#">Services</a></li>
        </ul>

      </div>
      </>
    )
  }
}