import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';

import Orange from './Orange';
import Yellow from './Yellow';

const Red = () => (
  <div>
    <h2 className='red'>Red</h2>
      <ul>
        <li><NavLink to='/red'>Red only</NavLink></li>
        <li><NavLink to='/red/orange'>Add orange!</NavLink></li>
        <li><NavLink to='/red/yellow'>Add yellow</NavLink></li>
      </ul>
    <Route path='/red/orange' component={Orange} />
    <Route path='/red/yellow' component={Yellow} />
  </div>
);

export default Red;
