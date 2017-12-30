import React from 'react';
import { render } from 'react-dom';

import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './stylesheets/main.css';

import Root from './routes';
import registerServiceWorker from './registerServiceWorker';

render(<Root />, document.getElementById('root'));

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./routes', () => {
    import('./routes')
    .then((module) => {
      const NewRoot = module.default;
      render(<NewRoot />, document.getElementById('root'));
    })
  });
}

registerServiceWorker();
