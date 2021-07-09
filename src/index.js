import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';

// import Player from './components/Player';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Musics from './views/Musics';
import About from './views/About';
import Music from './views/Music';
import NotFound from './views/Notfound';

ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/music/:music" component={Music} />
      <Route path="/musics" exact component={Musics} />
      <Route path="/about" exact component={About} />
      <Route path="/404" exact component={NotFound} />
      <Route path="/" exact component={Home} />
      <Route component={NotFound} />
    </Switch>
    {/* <Player /> */}
  </BrowserRouter>,
  document.getElementById('root'),
);
