import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

import Headroom from 'react-headroom';

import PageHeader from 'react-bootstrap/lib/PageHeader';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class App extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <Grid className="app">
        <Headroom>
          <Row className="title-header">
            <Col xs={12} md={10} mdOffset={1}>
              <PageHeader>Kane's forge</PageHeader>
            </Col>
          </Row>
          <Row>
            <Col className="nav-bar">
              <NavLink id="home" className="menu-item btn-primary" to="/" exact>Home</NavLink>&nbsp;
              <NavLink id="resume" className="menu-item btn-primary" to="/resume">Resume</NavLink>&nbsp;
              <NavLink id="personal-projects" className="menu-item btn-primary" to="/personal-projects">Personal Projects</NavLink>&nbsp;
              <NavLink id="contact" className="menu-item btn-primary" activeClassName="active" to="/contact">Contact</NavLink>&nbsp;
              <NavLink id="this-demo" className="menu-item btn-primary" activeClassName="active" to="/this-demo">About this "site"</NavLink>&nbsp;
            </Col>
          </Row>
        </Headroom>
        <Row id="viewport">
          <Col xs={12} md={10} mdOffset={1}>
            {this.props.children}
          </Col>
        </Row>
      </Grid>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withRouter(App);
