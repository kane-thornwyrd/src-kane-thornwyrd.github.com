import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux'

import { Provider } from 'react-redux'
import { Switch, Route, Router } from 'react-router'


import { addStyle } from 'react-bootstrap/lib/utils/bootstrapUtils';
import Button from 'react-bootstrap/lib/Button';

import { loadableFactory } from './utils';

import App from './App';
import fourOFour from './pages/404';

const history = createHistory();
const historyMiddleware = routerMiddleware(history)

const resume = [
  {
    title: 'Drupal Expert',
    date: 'June 2016 - january 2018',
    children: (<p>Coool</p>)
  },
  {
    title: 'Senior JS Dev. & Drupal Adviser',
    date: 'July 2013 - October 2015',
    children: (<p>Coool</p>)
  },
  {
    title: 'The JS Guy',
    date: (<p>May 2016 - March 2016</p>),
    children: (<p>Coool</p>)
  },
  {
    title: 'Senior JS Dev.',
    date: (<p>January 2018 - June 2016</p>),
    children: (<div>
      <h3>Missions:</h3>
      <ul>
        <li>Craft the MVP in less than 3 months as 2nd member of the core team…</li>
        <li>Design and implement the multivector pricing calculation system…</li>
        <li>Craft the Slack bot which generate BI reports…</li>
        <li>Wrote a HOC to redirect people based on ACL…</li>
        <li>A whole lot  more during this beautiful project nurtured until the current, well mature, state.</li>
      </ul>
      <h3>Architectures:</h3> CQRS DDD Event Sourcing
Technologies: Botkit Elasticsearch ES 6/7 Express MongoDB Node.js RabbitMQ React Redux Relay
    </div>)
  },
];

const store = createStore(
  combineReducers({
    router: routerReducer,
  }),
  // { resume },
  applyMiddleware(thunk, historyMiddleware),
);

addStyle(Button, 'kane-button-1');


const AsyncHome = loadableFactory({importer: () => import("./pages/Home"), store});
const AsyncResume = loadableFactory({importer: () => import("./pages/Resume"), store});
const AsyncAbout = loadableFactory({importer: () => import("./pages/About"), store});

export default (props) => (
<Provider store={store}>
  <Router history={history}>
    <App>
      <Switch>
        <Route path="/" exact component={AsyncHome} />
        <Route path="/resume" component={AsyncResume} />
        <Route path="/about" component={AsyncAbout} />
        <Route component={fourOFour} />
      </Switch>
    </App>
  </Router>
</Provider>
);
