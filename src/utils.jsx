import React from 'react';
import Loadable from 'react-loadable';

import LoaderAnimation from './components/loaderAnimation';

/**
 * Uppercase the first letter
 *
 * @param      {string}  string  The string to process
 * @return     {string}  the string with the first letter uppercased
 */
export const ucFirst = string => string.charAt(0).toUpperCase() + string.slice(1);

/**
 * Quick generate a simple hash for a given string
 *
 * @param      {string}  string  The string
 * @return     {string}  a hash
 */
export const fastHash = string => string.split('').reduce((a, b) => { a = ((a << 5) - a) + b.charCodeAt(0); return a & a; }, 0);

/**
 * Wrap an import into a pre-configured Loadable component.
 *
 * @param      {Object}  arg1           the config
 * @param      {Promise}  arg1.importer  The importer to wrap
 * @param      {Object}  [arg1.store]     The store to pass as prop
 * @return     {Component}  the Loadable ready to be rendered.
 */
export const loadableFactory = ({ importer, store }) => Loadable({
  loader: importer,
  loading: LoaderAnimation,
  delay: 500,
  timeout: 10000,
  render(loaded, props) {
    const C = loaded.default;
    if (store) { return <C {...props} store={store} />; }
    return <C {...props} />;
  },
});
