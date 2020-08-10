import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Landing from './components/Landing'

import Register from './components/Register'
import Profile from './components/Profile'
import Profileform from './components/Profileform'
import Contact from './components/Contact'

import JobSearch from "./components/JobSearch"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/profilePage" component={Profileform} />
            <Route exact path="/jobs" component={JobSearch} />
            <Route exact path="/contact" component={Contact} />

          </div>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
