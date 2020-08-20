import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';

import Red from './Red';
import Blue from './Blue';
import Green from './Green';
import Violet from './Violet';

const Rainbow = () => (
  <div>
    <h1>Rainbow Router!</h1>
      <ul>
          <li><NavLink exact to="/red">Red</NavLink></li>
          <li><NavLink exact to="/blue">Blue</NavLink></li>
          <li><NavLink to="/green">Green</NavLink></li>
          <li><NavLink to="/violet">Violet</NavLink></li>
      </ul>
    <div id='rainbow'>
      <Route path="/red" component={Red} />
      <Route path="/blue" component={Blue} />
      <Route path="/green" component={Green} />
      <Route path="/violet" component={Violet} />
    </div>
  </div>
);

export default Rainbow;
