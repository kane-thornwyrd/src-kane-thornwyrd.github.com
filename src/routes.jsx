import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { routerReducer as routing, syncHistoryWithStore } from 'react-router-redux';
import Loadable from 'react-loadable';

import App from './App';
import fourOFour from './components/404';
import LoaderAnimation from './components/loaderAnimation';

const browserHistory = createBrowserHistory();

const store = createStore(
  combineReducers({
    routing,
  }),
  applyMiddleware(thunk),
);
syncHistoryWithStore(browserHistory, store);


// const jobs = [
//   {
//     title: 'Drupal Expert',
//     date: 'June 2016 - january 2018',
//     children: (<p>Coool</p>)
//   },
//   {
//     title: 'Senior JS Dev. & Drupal Adviser',
//     date: 'July 2013 - October 2015',
//     children: (<p>Coool</p>)
//   },
//   {
//     title: 'The JS Guy',
//     date: (<p>May 2016 - March 2016</p>),
//     children: (<p>Coool</p>)
//   },
//   {
//     title: 'Senior JS Dev.',
//     date: (<p>January 2018 - June 2016</p>),
//     children: (<div>
//       <h3>Missions:</h3>
//       <ul>
//         <li>Craft the MVP in less than 3 months as 2nd member of the core team…</li>
//         <li>Design and implement the multivector pricing calculation system…</li>
//         <li>Craft the Slack bot which generate BI reports…</li>
//         <li>Wrote a HOC to redirect people based on ACL…</li>
//         <li>A whole lot  more during this beautiful project nurtured until the current, well mature, state.</li>
//       </ul>
//       <h3>Architectures:</h3> CQRS DDD Event Sourcing
// Technologies: Botkit Elasticsearch ES 6/7 Express MongoDB Node.js RabbitMQ React Redux Relay
//     </div>)
//   },
// ];


function loadableFactory(importer){
  return Loadable({
    loader: importer,
    loading: LoaderAnimation,
    delay: 500,
    timeout: 10000,
    render(loaded, props) {
      const C = loaded.default;
      return <C {...props} />;
    }
  });
}

const AsyncHome = loadableFactory(() => import("./pages/Home"));
const AsyncResume = loadableFactory(() => import("./pages/Resume"));
const AsyncAbout = loadableFactory(() => import("./pages/About"));

export default (props) => (<Router>
    <App store={store}>
      <Switch>
        <Route path="/" exact component={AsyncHome} />
        <Route path="/resume" component={AsyncResume} />
        <Route path="/about" component={AsyncAbout} />
        <Route component={fourOFour} />
      </Switch>
    </App>
  </Router>);
