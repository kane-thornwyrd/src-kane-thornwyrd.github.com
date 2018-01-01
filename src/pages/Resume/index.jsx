import React, { Component, Fragment } from 'react';

import PageHeader from 'react-bootstrap/lib/PageHeader';
import { Timeline, TimelineEvent } from 'react-event-timeline';

import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Well from 'react-bootstrap/lib/Well';

import './stylesheets/index.sass';

const MAIN_COLOR = '#158CBA';

const resume = [
  {
    title: 'Senior JS Dev.',
    subtitle: 'Convargo',
    createdAt: 'June 2016 - January 2018',
    body: (<Fragment>
      <h3>Missions:</h3>
      <ul>
        <li>Craft the MVP in less than 3 months as 2nd member of the core team…</li>
        <li>Design and implement the multivector pricing calculation system…</li>
        <li>Craft the Slack bot which generate BI reports…</li>
        <li>Wrote a HOC to redirect people based on ACL…</li>
        <li><Glyphicon glyph="plus" /></li>
      </ul>
      <h3>Architectures:</h3> CQRS DDD Event Sourcing
      <h3>Technologies:</h3> Botkit Elasticsearch ES 6/7 Express MongoDB Node.js RabbitMQ React Redux Relay
    </Fragment>),
  },
  {
    title: 'The JS Guy',
    subtitle: 'Forma-Dis',
    createdAt: 'March 2016 - May 2016',
    body: (<Fragment>
      <h3>Missions:</h3>
      <ul>
        <li>Built a Redux/Flux-like in vanilla js following strong constraints in terms of maintainability.</li>
        <li>Built a dynamic survey SPA on top of Backbone, using jQuery as DOM altering lib and Ajax toolbox, wrapped by Bluebird for neat and fast ES6-compliant promises.</li>
        <li>Built an admin UX using Bootstrap3, Material design for Bs3, jQuery-UI, and Toastr for the waow effect.</li>
      </ul>
      <h3>Architectures:</h3> Flux
      <h3>Technologies:</h3> Backbone.js Bluebird Bootstrap3 jQuery jQuery-UI Material Design Toastr
    </Fragment>),
  },
  {
    title: 'Senior JS Dev. & Drupal Adviser',
    subtitle: 'Cellfish',
    createdAt: 'July 2013 - October 2015',
    body: (<Fragment>
      <h3>Missions:</h3>
      <ul>
        <li>Built from ground up the JavaScript Framework/Library we are using on all the projects. Require.js, jQuery, Underscore.js and many more libraries packed.</li>
        <li>Design and implementation of the automatic continuous integration workflow, used by the web integration department, thank to Grunt.js and recently Gulp too.</li>
        <li>Javascript Guru, helping on a daily basis a team of 7 persons to get a grasp on the JS universe.</li>
        <li>Last chance adviser for fast issue resolution on the Drupal platform.</li>
      </ul>
      <h3>Technologies:</h3> jQuery Grunt Gulp Require.js Underscore
    </Fragment>),
  },
  {
    title: 'Web Developer/Drupal Expert',
    subtitle: 'YGL Consulting',
    createdAt: 'January 2012 - February 2014',
    body: (<Fragment>
      <h3>Missions:</h3>
      <ul className="list-unstyled">
        <li>
          Drupal
          <ul>
            <li>Developing</li>
            <li>Industrializing</li>
            <li>Advising</li>
            <li>Pulling the projects out of Hell</li>
            <li>Evangelizing</li>
            <li>Spreading the knowledge</li>
          </ul>
        </li>
        <li>
          Node.js/Express.js/other technos *.js:
          <ul>
            <li>Discovering the next step of the Web</li>
            <li>Having fun with something that most people consider as a weird heresy and some as a true Leap forward something we dreamt for Decades.</li>
            <li>Writing Code that is as beautiful as useful and efficient.</li>
          </ul>
        </li>
      </ul>
    </Fragment>),
  },
  {
    title: 'Web Dev Drupal/PHP/JS',
    subtitle: 'Alter Way',
    createdAt: 'October 2009 - December 2011',
    body: (<p>
      I intervened as Lead Developer on more than a dozen projects,
      ranging in size between the institutional site of a European lobby to one of the largest French travel agency.
    </p>),
  },
  {
    icon: (<Glyphicon glyph="education" />),
    title: 'Software Engineering Technician',
    subtitle: 'In\'Tech INFO',
    createdAt: 'March 2007 - October 2009',
    body: 'Promotion: ITI07M, TOEIC: 775/990',
  },
];

class Resume extends Component {
  generateTimelineEvent({
    title, subtitle, createdAt, icon = (<Glyphicon glyph="briefcase" />), body,
  }) {
    return (
      <TimelineEvent
        title={title}
        subtitle={subtitle}
        createdAt={createdAt}
        icon={icon}
        iconColor={MAIN_COLOR}
        titleStyle={{ fontWeight: 'bold' }}
        subtitleStyle={{ fontWeight: 'bold' }}
        style={{ fontSize: '1.5em' }}
        key={`${title}-${createdAt}`}
      >
        {body}
      </TimelineEvent>
    );
  }
  render() {
    return (
      <div className="page">
        <PageHeader>Resume <small>also known as Curriculum Vitae</small></PageHeader>
        <blockquote className="blockquote">
          <p className="mb-0">Test</p>
        </blockquote>
        <Timeline>
          {resume.map(this.generateTimelineEvent)}
        </Timeline>
      </div>
    );
  }
}

export default Resume;
