import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

import GithubCorner from 'react-github-corner';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';

class App extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }
  constructor(props) {
    super(props);
    if(window.location.search) {
      import('parse-location').then(module => {
        const location = module.default(window.location);
        console.log(location.query);
        this.props.history.push(location.query.p || '/');
      });
    }
  }
  render() {
    return (
      <div className="app">
        <Navbar inverse collapseOnSelect>
        <GithubCorner
          bannerColor="#158CBA"
          octoColor="#000"
          size={64}
          direction="left"
          svgStyle={{"mixBlendMode":"lighten"}}
          href="https://github.com/kane-thornwyrd/src-kane-thornwyrd.github.com"
        />
          <Navbar.Header>
            <Navbar.Brand>
              <a href="?p=/" >Kane's forge</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <li role="presentation">
              <NavLink id="home" className="menu-item btn btn-primary" to="/" exact>Home</NavLink>&nbsp;
              </li>
              <li role="presentation">
              <NavLink id="resume" className="menu-item btn btn-primary" to="/resume">Resume</NavLink>&nbsp;
              </li>
              <li role="presentation">
              <NavLink id="personal-projects" className="menu-item btn btn-primary" to="/personal-projects">Personal Projects</NavLink>&nbsp;
              </li>
              <li role="presentation">
              <NavLink id="contact" className="menu-item btn btn-primary" activeClassName="active" to="/contact">Contact</NavLink>&nbsp;
              </li>
              <li role="presentation">
              <NavLink id="this-demo" className="menu-item btn btn-primary" activeClassName="active" to="/this-demo">About this "site"</NavLink>&nbsp;
              </li>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Grid>
          <Row className="viewport">
            <Col xs={10} xsOffset={1}>
              {this.props.children}
            </Col>
          </Row>
          <Row className="footer">
            <Col xs={6}>
              Author: Jean-cédric Thérond
            </Col>
            <Col xs={6}>
                <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">
                  <img alt="Creative Commons License" src="https://i.creativecommons.org/l/by-nc/4.0/80x15.png" />
                </a> This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial 4.0 International License</a>.
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withRouter(App);
