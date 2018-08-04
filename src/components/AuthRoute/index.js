import React from 'react';
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom';

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      rest.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to={`/login?redirect=${props.location.pathname}`} />
      )
    }
  />
);

export default connect(state => ({
  isAuthenticated: state.auth.auth
}))(AuthRoute)