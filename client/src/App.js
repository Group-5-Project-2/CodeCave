import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">

      <Navbar />
      
      {/* Need a react router to switch in between login, sign up and member pages */}
      {/* Need to create Login Component, Sign-up Component and Memebr Page Component */}

      <Footer />
     
    </div>
  );
}

export default App;
