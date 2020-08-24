import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import Home from './home/Home'
import About from './about/About'
import Portfolio from './portfolio/Portfolio'
import Contact from './contact/Contact'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
