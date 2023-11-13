import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
       <Navbar/>
       <Routes>
          <Route exact path="/" Component={() => <News key= "general" pageSize = {8} country = "us" category = "general"/>}/>
          <Route exact path="/business" Component={() => <News key= "business" pageSize = {8} country = "us" category = "business"/>}/>
          <Route exact path="/entertainment" Component={() => <News key= "entertainment" pageSize = {8} country = "us" category = "entertainment"/>}/>
          <Route exact path="/health" Component={() => <News key= "health" pageSize = {8} country = "us" category = "health"/>}/>
          <Route exact path="/sports" Component={() => <News key= "sports" pageSize = {8} country = "us" category = "sports"/>}/>
          <Route exact path="/science" Component={() => <News key= "science" pageSize = {8} country = "us" category = "science"/>}/>
          <Route exact path="/technology" Component={() => <News key= "technology" pageSize = {8} country = "us" category = "technology"/>}/>
          </Routes>
       </Router>
      </div>
    )
  }
}

