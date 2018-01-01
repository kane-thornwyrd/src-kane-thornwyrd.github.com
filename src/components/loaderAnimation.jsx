import React from 'react';
import Loader from 'react-loaders';

export default ({ error, pastDelay = true, timedOut }) => {
  if (error) {
    return <Loader type="square-spin" active color="#932B2B" />;
  } else if (timedOut) {
    return (<div>
      Taking a long time...
      <Loader type="square-spin" active color="#932B2B" />
    </div>);
  } else if (pastDelay) {
    return <Loader type="square-spin" color="#158CBA" />;
  }
  return null;
};
