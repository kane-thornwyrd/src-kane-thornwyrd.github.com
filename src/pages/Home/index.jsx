import React, { Component } from 'react';
import { push } from 'react-router-redux/lib/actions';

import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Button from 'react-bootstrap/lib/Button';

import avatar from '../../images/avatar.png';

class Home extends Component {
  render() {
    return (
      <div className="page">
        <Jumbotron>
          <h1><img src={avatar} alt="" />Hello, I'm Kane !</h1>
          <p>Welcome, here you will fathom my dire sandbox creations.</p>
          <p>
            And, yeah, if you ask me, I totally over-engineered this site, and I can do worst !
          </p>
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
