import React from 'react';
import ReactDOM from 'react-dom';
import App from './common/App';
import registerServiceWorker from './registerServiceWorker';
import './style/index.scss';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
