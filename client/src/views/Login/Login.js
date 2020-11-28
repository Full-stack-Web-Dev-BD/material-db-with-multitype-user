import React, { useState, useEffect } from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Grid,
  Button,
  TextField,
  Link,
  Typography
} from '@material-ui/core';
import axios from 'axios'
const schema = {
  Name: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 32
    }
  },
  lastName: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 32
    }
  },
  email: {
    presence: { allowEmpty: false, message: 'is required' },
    email: true,
    length: {
      maximum: 64
    }
  },
  password: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 128
    }
  }
};

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: '100%'
  },
  grid: {
    height: '100%'
  },
  quoteContainer: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  quote: {
    backgroundColor: theme.palette.neutral,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url(/images/auth.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  quoteInner: {
    textAlign: 'center',
    flexBasis: '600px'
  },
  quoteText: {
    color: theme.palette.white,
    fontWeight: 300
  },
  name: {
    marginTop: theme.spacing(3),
    color: theme.palette.white
  },
  bio: {
    color: theme.palette.white
  },
  contentContainer: {},
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  contentHeader: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: theme.spacing(5),
    paddingBototm: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  logoImage: {
    marginLeft: theme.spacing(4)
  },
  contentBody: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    }
  },
  form: {
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 125,
    flexBasis: 700,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }
  },
  title: {
    marginTop: theme.spacing(3)
  },
  textField: {
    marginTop: theme.spacing(2)
  },
  policy: {
    marginTop: theme.spacing(1),
    display: 'flex',
    alignItems: 'center'
  },
  policyCheckbox: {
    marginLeft: '-14px'
  },
  LoginButton: {
    margin: theme.spacing(2, 0)
  }
}));

const Login = props => {
  const { history } = props;
  const [error, setError] = useState({})
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const classes = useStyles();



  const handleLogin = (event) => {
    event.preventDefault()
    axios
      .post('/api/users/login', {email, password})
      .then(res => {
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        window.location.href='/dashboard'
      })
      .catch(err =>{
        setError(err.response.data)
      });
  }
  return (
    <div className={classes.root}>
      <Grid
        className={classes.grid}
        container
      >
        <Grid
          className={classes.quoteContainer}
          item
          lg={5}
        >
          <div className={classes.quote}>
            <div className={classes.quoteInner}>
              <Typography
                className={classes.quoteText}
                variant="h1"
              >During the pandemic, voiceover work has become a consistent resource for me to generate revenue.</Typography>
            </div>
          </div>
        </Grid>
        <Grid
          className={classes.content}
          item
          lg={7}
          xs={12}
        >
          <div className={classes.content}>
            <div className={classes.contentBody}>
              <form
                className={classes.form}
                onSubmit={handleLogin}
              >
                <Typography variant="h3">
                    Login here .
                </Typography>
                <TextField
                  className={classes.textField}
                  fullWidth
                  label="Email"
                  name="email"
                  onChange={e => setEmail(e.target.value)}
                  error={error.email ? true : false}
                  type="email"
                  variant="outlined"
                />

                {
                  error.email ?
                    <p className="text-danger"> {error.email} </p>
                    : ''
                }
                <TextField
                  className={classes.textField}
                  fullWidth
                  error={error.password ? true : false}
                  label="Password"
                  name="Password"
                  onChange={e => setPassword(e.target.value)}
                  type="password"
                  variant="outlined"
                />

                {
                  error.password ?
                    <p className="text-danger"> {error.password} </p>
                    : ''
                }

                {
                  email && password?

                    <Button
                      className={classes.LoginButton}
                      color="primary"
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                    >
                      Sign in now
                    </Button> :
                    <Button
                      className={classes.LoginButton}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                    >
                      Please Fill up All Required  Filled
                </Button>

                }
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  Don't have account?{''}
                  <Link
                    component={RouterLink}
                    to="/sign-up"
                    variant="h6"
                  >
                    Sign up
                  </Link>
                </Typography>
              </form>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

Login.propTypes = {
  history: PropTypes.object
};

export default withRouter(Login);
