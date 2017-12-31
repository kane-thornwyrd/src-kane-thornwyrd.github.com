import React, { Component } from 'react';

class Resume extends Component {
  constructor(props) {
    super(props);
    const { store } = props;
    console.log(store.getState());
  }
  render() {
    return (
      <div className="page">
        <h1>Resume</h1>
        <p>Hello from the Resume page!</p>
      </div>
    );
  }
}

export default Resume;
