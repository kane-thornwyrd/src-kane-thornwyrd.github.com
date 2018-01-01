import React, { Component } from 'react';

import PageHeader from 'react-bootstrap/lib/PageHeader';

import { loadableFactory } from '../../utils';

const AsyncSnake = loadableFactory({importer: () => import("./snake")});

class About extends Component {
  render() {
    return (
      <div className="page">
        <PageHeader>404 <small>Sorry, the page does not exist (yet ?!)…</small></PageHeader>
        <p>If you need to chill a bit, you can try to beat this game ↓</p>
        <AsyncSnake />
      </div>
    );
  }
}

export default About;
