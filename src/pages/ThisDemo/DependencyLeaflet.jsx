import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';

class DependencyLeaflet extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    version: PropTypes.string.isRequired
  }
  constructor(props){
    super(props);
    this.state = {
      loading: false,
      loadingError: false,
      pkgInformations: {},
    }
  }
  header({ name, version }) {
    return (<h3>{name} <small>{version}</small></h3>);
  }
  render() {
    return (
      <ListGroupItem header={this.header(this.props)}>
        <a href={`https://www.npmjs.com/package/${this.props.name}`}>
          <img src={`https://nodei.co/npm/${this.props.name}.png`} alt="Link to its npm page" />
        </a>
      </ListGroupItem>
    );
  }
}

export default DependencyLeaflet;
