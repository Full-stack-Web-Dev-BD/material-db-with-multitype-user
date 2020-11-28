import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { connect } from 'react-redux'
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Badge, Hidden, IconButton, Avatar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import { logoutUser } from '../../../../actions/authActions'

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none'
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  },
  avatar:{
    cursor:'pointer'
  }
}));

const Topbar = props => {
  const { className, logoutUser, onSidebarOpen, ...rest } = props;

  const classes = useStyles();

  const [notifications] = useState([]);

  const user = {
    name: 'Shen Zhi',
    avatar: '/images/avatars/avatar_11.png',
    bio: 'Brain Director'
  };

  const onLogoutClick=(e)=> {
    e.preventDefault();
    logoutUser();
  }

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Toolbar>
        <RouterLink to="/dashboard" style={{color:'white'}}>
          X-Solution
        </RouterLink>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser})(
  Topbar
);