import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// ROUTING IMPORT
import { HashRouter as Router } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";

import store from './store';

ReactDOM.render(
  <Router>
      <Provider store={ store }>
        <App />
      </Provider>
    </Router>,
  document.getElementById('root')
);
registerServiceWorker();