import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <App 
        text="Welcome to my page Bro!"
    />,
  document.getElementById('root')
);


serviceWorker.unregister();