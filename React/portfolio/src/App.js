import { Component } from "react";
import './personStyle.css'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";

export default class Person extends Component{
  render(){
    return(
      <Router>  
      <Navbar/>
      <Routes>
      <Route path='/' Component={Home} />
      </Routes>
      </Router>

      
      
    )
  }
}