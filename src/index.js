import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';
import './scss/index.scss';

import Home from './views/Home';
import Musics from './views/Musics';
import About from './views/About';
import Music from './views/music';
import NotFound from './views/Notfound';

ReactDOM.render(
     <BrowserRouter>
          <Switch>
               <Route path="/music/:music" component={ Music } />
               <Route path="/musics" exact component={ Musics } />
               <Route path="/about" exact component={ About } />
               <Route path="/" exact component={ Home } />
               <Route component={ NotFound } />
          </Switch>
     </BrowserRouter>
, document.getElementById('root'));

serviceWorker.unregister();
