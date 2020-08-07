import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Signup from './components/Signup';
import User from './components/User';
import ProfileView from './components/ProfileView';
import ProfileEdit1 from './components/ProfileEdit1';
import ProfileEdit2 from './components/ProfileEdit2';
import ProfileEdit3 from './components/ProfileEdit3';
import JobSearch from './components/JobSearch';
import FriendList from './components/FriendList';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Footer from './components/Footer'
import Profileform from './components/Profileform'

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
          </div>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
