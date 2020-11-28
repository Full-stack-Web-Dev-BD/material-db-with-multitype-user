import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const RouteWithLayout = props => {
  const { layout: Layout, component: Component, auth, ...rest } = props;

  return (
    <Route
      {...rest}
      render={matchProps => (
        auth.isAuthenticated === true ? (
          <Layout>
            <Component {...matchProps} />
          </Layout>
        ):
        <Redirect to="/" />
      )}
    />
  );
};


RouteWithLayout.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(RouteWithLayout);
