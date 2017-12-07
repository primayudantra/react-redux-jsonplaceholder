/*
* Higher-order component (HOC) to wrap restricted pages
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const RestrictedContainer = (RoutesComponent) => {
  class Restricted extends Component {
    render() {
      return (
        <RoutesComponent {...this.props} />
      );
    }
  }

  Restricted.propTypes = {
    location: PropTypes.object.isRequired
  };

  return withRouter(Restricted);
};

export default RestrictedContainer;
