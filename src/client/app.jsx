import 'babel-polyfill';

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

const dogBark = 'ouaf';

const App = props => (
  <div>
    The dog says: {props.message}
  </div>
);

App.propTypes = {
  message: PropTypes.string.isRequired,
};

ReactDOM.render(<App message={dogBark} />, document.querySelector('.app'));
