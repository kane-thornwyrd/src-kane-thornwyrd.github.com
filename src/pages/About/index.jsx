import React, { Component } from 'react';

import PageHeader from 'react-bootstrap/lib/PageHeader';

class About extends Component {
  render() {
    return (
      <div className="page">
        <PageHeader>About</PageHeader>
        <p>Hello from the About page!</p>
      </div>
    );
  }
}

export default About;
