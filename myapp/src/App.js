import React from 'react';
import './App.css';
import {BrowserRouter,Route,Link} from "react-router-dom"
import Header from './components/Header'
import HomePage from './components/Home'
import Footer from './components/footer'
class App extends React.Component{
  render(){
    return(
<BrowserRouter>
  <Header />
  <HomePage/>
  <Footer />
<Route   path="/" component={HomePage}>  </Route>
</BrowserRouter>
    );
  }
}


export default App;