import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField
} from '@material-ui/core';
import { connect } from 'react-redux';

const useStyles = makeStyles(() => ({
  root: {}
}));

const AccountDetails = props => {
  const { className, ...rest } = props;
  const { user } = props.auth
  const classes = useStyles();
  const logout=()=>{
    window.localStorage.removeItem('jwtToken')
    window.location.href="/"
  }

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <form
        autoComplete="off"
        noValidate
        className="text-center"
      >
        <CardHeader
          subheader="User Details"
          title="Profile"
        />
        <Divider />
        <CardContent>
          <div className="text-center text-capitilized">
            <p><b>Name : </b> {user.name} </p>
            <p><b>Email : </b> {user.email} </p>
            <p><b>Account Type : </b> {user.type} </p>
            <Button onClick={logout} className="btn-danger" color="secondary" size="small" variant="contained">  Log Out </Button>
          </div>
        </CardContent>
        <Divider />
      </form>
    </Card>
  );
};

AccountDetails.propTypes = {
  className: PropTypes.string
};
const mapStateToProps = state => ({
  auth: state.auth
})
export default connect(mapStateToProps, null)(AccountDetails);
