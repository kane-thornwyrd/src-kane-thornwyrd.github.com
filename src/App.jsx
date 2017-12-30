import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Headroom from 'react-headroom';

import PageHeader from 'react-bootstrap/lib/PageHeader';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import logo from './images/anvil.svg';

const App = props => (
  <Grid className="app">
    <Headroom>
      <Row>
        <Col xs={12} md={6} mdOffset={3}>
          <img src={logo} style={{ float: 'left' }} />
          <PageHeader>Kane's forge<br /><small>Jean-cédric's place on the interwebs</small></PageHeader>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6} mdOffset={3}>
          <Link id="home" className="menu-item" to="/">Home</Link>&nbsp;
          <Link id="resume" className="menu-item" to="/resume">Resume</Link>&nbsp;
          <Link id="personal-projects" className="menu-item" to="/personal-projects">Personal Projects</Link>&nbsp;
          <Link id="contact" className="menu-item" to="/contact">Contact</Link>&nbsp;
        </Col>
      </Row>
    </Headroom>
    <Row id="viewport">
      <Col xs={12} md={6} mdOffset={3}>
        {props.children}
      </Col>
    </Row>
  </Grid>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
