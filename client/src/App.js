import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Signup from './components/Signup';
import User from './components/User';
import ProfilePage1 from './components/ProfilePage1';

function App () {
	return (
		<div className='App'>
			<Navbar />
			<Router >
				<Switch >
					<Route exact path='/' component={Login} />
					<Route exact path='/signup' component={Signup} />
					<Route exact path='/user' component={User} />
					<Route exact path='/profile1' component={ProfilePage1} />
				</Switch>
			</Router>
			<Footer />
		</div>
	);
}

export default App;
