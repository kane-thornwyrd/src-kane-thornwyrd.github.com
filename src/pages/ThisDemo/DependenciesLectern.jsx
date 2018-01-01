import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ListGroup from 'react-bootstrap/lib/ListGroup';

import DependencyLeaflet from './DependencyLeaflet';

class DependenciesLectern extends Component {
  static propTypes = {
    deps: PropTypes.object.isRequired
  }
  render() {
    return (
      <ListGroup>
      { Object.keys(this.props.deps).map((name) => {
          const version = this.props.deps[name];
          return <DependencyLeaflet name={name} version={version} key={`${name}-${version}`} />
      })}
      </ListGroup>
    );
  }
}

export default DependenciesLectern;
