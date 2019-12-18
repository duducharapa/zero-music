import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';
import './scss/index.scss';

import Home from './views/home';
import Musics from './views/musics';
import About from './views/about';
import Music from './views/music';

ReactDOM.render(
     <BrowserRouter>
          <Switch>
               <Route path="/musics/:music" component={ Music } />
               <Route path="/musics" component={ Musics } />
               <Route path="/about" component={ About } />
               <Route path="/" exact component={ Home } />
          </Switch>
     </BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
