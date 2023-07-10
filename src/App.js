import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './assets/css/styles.css';

import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './components/home';
import Contact from './components/contact';



class App extends React.Component {

  render(){
  return (
    <Router>
    <div className="App">
     <Navbar/>
     <Route exact path="/" component={Home} />
     <Contact/>
     <Footer/>
    </div>
    </Router>
  );
  

}
}

export default App;
