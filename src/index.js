import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'typeface-ibm-plex-sans';

ReactDOM.render(
  <React.StrictMode>
    <App {...window.templateProps} />
  </React.StrictMode>,
  document.getElementById('root')
);
