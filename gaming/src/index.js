import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var PORT = process.env.PORT || 8080;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
