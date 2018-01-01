import React, { Component } from 'react';
import update from 'react-addons-update';
import throttle from 'lodash/throttle';

import Button from 'react-bootstrap/lib/Button';
import PageHeader from 'react-bootstrap/lib/PageHeader';

import { loadableFactory } from '../../utils';

import LoaderAnimation from '../../components/loaderAnimation';

const AsyncDependenciesLectern = loadableFactory({importer: () => import("./DependenciesLectern")})

class ThisDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      loaded: false,
      loadingError: false,
      pkgInformations: {},
    };
    this.loadPageInformations = throttle(this.loadPageInformations.bind(this), 10000);
    this.loadPackageInformations = this.loadPackageInformations.bind(this);
  }
  loadPageInformations() {
    this.setState(prevState =>
      update(prevState, {
        loading: { $set: true },
      }), this.loadPackageInformations);
  }
  async loadPackageInformations() {
    const superagent = await import('superagent');
    const pkg = await superagent
      .get('https://rawgit.com/kane-thornwyrd/src-kane-thornwyrd.github.com/master/package.json')
      .set('Accept', 'application/json');
    if (!pkg.error) {
      this.setState(prevState =>
        update(prevState, {
          loadingError: { $set: true },
        }));
    }
    this.setState(prevState =>
      update(prevState, {
        loaded: { $set: true },
        pkgInformations: { $set: Object.assign({}, pkg.body.dependencies, pkg.body.devDependencies) },
      }));
  }
  render() {
    return (
      <div className="page">
        <PageHeader>About this "site" <small>(spoiler: it's a PWA)</small></PageHeader>
        {(!this.state.loading && !this.state.loaded)
          ? <Button bsSize="large" bsStyle="primary" onClick={this.loadPageInformations}>Load informations</Button>
          : (this.state.loading && !this.state.loaded)
            ? <LoaderAnimation error={this.state.loadingError} />
            : <AsyncDependenciesLectern deps={this.state.pkgInformations} />
        }
      </div>
    );
  }
}

export default ThisDemo;
