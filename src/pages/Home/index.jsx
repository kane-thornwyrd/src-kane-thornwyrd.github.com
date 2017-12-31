import React, { Component } from 'react';
import { push } from 'react-router-redux/lib/actions';

import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Button from 'react-bootstrap/lib/Button';

import avatar from '../../images/avatar.png';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="page">
        <Jumbotron>
          <h1><img src={avatar} alt="" />Hello, I'm Kane !</h1>
          <p>Welcome, here you will fathom my dire sandbox creations.</p>
          <p>I hope you will enjoy you stay,
          and if by any means you would like to get in touch with me, all the required informations are just below:
          </p>
          <p><Button bsSize="large" bsStyle="primary" onClick={() => this.props.store.dispatch(push('/contact'))}>Getting in touch</Button></p>
        </Jumbotron>
      </div>
    );
  }
}

export default Home;
