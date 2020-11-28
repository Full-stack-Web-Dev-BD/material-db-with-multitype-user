import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    textAlign:'center',
    backgroundColor: '#263238'
  },
  footer: {
    backgroundColor: '#263238',
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
  socialLink:{
    color:'white',
    paddingRight:5
  }
});

function Footer(props) {
  const { classes } = props;

  return (
    <footer className={classes.footer}>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" style={{color:'white'}}>
        X-Solution@2020 All right reserved
        </Typography>
        <Typography variant="h3" style={{color:'white', paddingTop:5}}>
          <a className={classes.socialLink} href="https://www.linkedin.com/in/selim-reza-70042114b" target="_blank">
            <LinkedInIcon style={{width:30, height:30}} />
          </a>
          <a className={classes.socialLink} href="https://www.facebook.com/profile.php?id=100006769382819" target="_blank">
            <FacebookIcon style={{width:30, height:30}} />
          </a>
          <a className={classes.socialLink} href="#" target="_blank">
            <TwitterIcon style={{width:30, height:30}} />
          </a>
          <a className={classes.socialLink} href="https://github.com/selim123018" target="_blank">
            <GitHubIcon />
          </a>
        </Typography>
      </Paper>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);