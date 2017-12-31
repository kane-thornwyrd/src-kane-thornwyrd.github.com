import React, { Component } from 'react';

import { loadableFactory } from '../../utils';

const AsyncSnake = loadableFactory({importer: () => import("./snake")});

class About extends Component {
  render() {
    return (
      <div className="page">
        <h1>404</h1>
        <p>Sorry, the page does not exist (yet ?!)…</p>
        <p>If you need to chill a bit, you can try to beat this game ↓</p>
        <AsyncSnake />
      </div>
    );
  }
}

export default About;
