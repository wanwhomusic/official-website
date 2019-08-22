import React from 'react';
import ReactDOM from 'react-dom';
import './theme/fonts.scss';

import Routes from './routes';

import App from './app';

const MOUNT_NODE = document.getElementById('app-root');

ReactDOM.render(
  <Routes>
    <App />
  </Routes>,
  MOUNT_NODE
);
