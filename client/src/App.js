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

import ProfilePage1 from './components/ProfilePage1';

import FriendList from './components/FriendList'


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
					<Route exact path='/friendlist' component={FriendList} />

					<Route exact path='/profileview' component={ProfileView} />
					<Route exact path='/profileedit1' component={ProfileEdit1} />
					<Route exact path='/profileedit2' component={ProfileEdit2} />
					<Route exact path='/profileedit3' component={ProfileEdit3} />

				</Switch>
			</Router>
			<Footer />
		</div>
	);
}

export default App;
