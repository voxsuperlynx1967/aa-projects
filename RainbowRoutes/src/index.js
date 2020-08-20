import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import styles from './index.css';
import Rainbow from './components/Rainbow';

const Root = () => (
  <BrowserRouter>
    <Rainbow />
  </BrowserRouter>
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Root />,
    document.getElementById('root')
  );
})
