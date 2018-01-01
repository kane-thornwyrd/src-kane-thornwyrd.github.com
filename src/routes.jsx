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

const store = createStore(
  combineReducers({
    router: routerReducer,
  }),
  applyMiddleware(thunk, historyMiddleware),
);

addStyle(Button, 'kane-button-1');


const AsyncHome = loadableFactory({importer: () => import("./pages/Home"), store});
const AsyncResume = loadableFactory({importer: () => import("./pages/Resume"), store});
const AsyncPersonalProjects = loadableFactory({importer: () => import("./pages/PersonalProjects"), store});
const AsyncAbout = loadableFactory({importer: () => import("./pages/About"), store});
const AsyncThisDemo = loadableFactory({importer: () => import("./pages/ThisDemo"), store});

export default (props) => (
  <Provider store={store}>
    <Router history={history}>
      <App>
        <Switch>
          <Route path="/" exact component={AsyncHome} />
          <Route path="/resume" component={AsyncResume} />
          <Route path="/personal-projects" component={AsyncPersonalProjects} />
          <Route path="/about" component={AsyncAbout} />
          <Route path="/this-demo" component={AsyncThisDemo} />
          <Route component={fourOFour} />
        </Switch>
      </App>
    </Router>
  </Provider>
);
