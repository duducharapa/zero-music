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
               <Route path="/music/:music" component={ Music } />
               <Route path="/musics" component={ Musics } />
               <Route path="/about" component={ About } />
               <Route path="/" exact component={ Home } />
          </Switch>
     </BrowserRouter>
, document.getElementById('root'));

serviceWorker.unregister();
