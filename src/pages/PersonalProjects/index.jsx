import React, { Component, Fragment } from 'react';
import update from 'react-addons-update';

import gatherGHUserRepos from 'github-user-repos';

import PageHeader from 'react-bootstrap/lib/PageHeader';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab';

import PersonalProjectLeaflet from './PersonalProjectLeaflet';

class PersonalProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
    };

    this.getRepos().then(repos => this.setState(prevState =>
      update(prevState, { repos: { $set: repos } })));
  }
  getRepos() {
    return new Promise((res, rej) => {
      gatherGHUserRepos({
        username: 'kane-thornwyrd',
        // token: '9aed1daed3ee7e81b11291b7e5f220c9c071270a', for testing purposes only
        visibility: 'public',
      }, (error, results, info) => {
        if (info) {
          console.error('Limit: %d', info.limit);
          console.error('Remaining: %d', info.remaining);
          console.error('Reset: %s', (new Date(info.reset * 1000)).toISOString());
        }
        if (error) { rej(new Error(error.message)); }
        res(results);
      });
    });
  }
  render() {
    return (
      <div className="page">
        <PageHeader>Personal Projects <small>That's a HUGE topic !</small></PageHeader>
        <Tabs id="personal-project-tab-container">
          <Tab eventKey="Github" title={(<Fragment>Github<span className="badge badge-light">{this.state.repos.length}</span></Fragment>)}>
            <dl className="row personal-project-repo-dl">
              {this.state.repos.map(repo => <PersonalProjectLeaflet {...repo} />)}
            </dl>
          </Tab>
          <Tab eventKey="AFK" title="AFK">Coming soon…</Tab>
        </Tabs>
      </div>
    );
  }
}

export default PersonalProjects;
