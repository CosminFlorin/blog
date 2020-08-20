import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from "./pages/home/home.js"
import Article from  "./pages/article/article"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function NavigationRouter (){
  return(
    
    <Router>
          
      <Route path="/article">
        <Article/>
      </Route>
      <Route  exact path="/">
        <Home/>
      </Route>
      
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <div className="app">
    <NavigationRouter/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

