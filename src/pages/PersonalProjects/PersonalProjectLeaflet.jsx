import React, { Component, Fragment } from 'react';
import update from 'react-addons-update';

import Glyphicon from 'react-bootstrap/lib/Glyphicon';

class PersonalProjectLeaflet extends Component {
  displayPageButton() {
    if (this.props.homepage) {
      return (
        <a href={`/${this.props.name}`} target="_blank">
          <Glyphicon glyph="home" />&nbsp;Homepage
        </a>
      );
    }
  }
  displaySrcButton() {
    if (this.props.html_url) {
      return (
        <a href={this.props.html_url} target="_blank">
          <Glyphicon glyph="book" />&nbsp;Source
        </a>
      );
    }
  }
  render() {
    const { name, description } = this.props;
    return (<Fragment>
      <dt className="col-sm-3">{name}</dt>
      <dd className="col-sm-7">{description}</dd>
      <dd className="col-sm-1">
        {this.displaySrcButton()}
      </dd>
      <dd className="col-sm-1">
        {this.displayPageButton()}
      </dd>
    </Fragment>);
  }
}

export default PersonalProjectLeaflet;
