import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root} id="about" style={{marginTop:30}}>
      <Grid container spacing={3}>
        <Grid item xl={12} md={12} xs={12} style={{textAlign:'center'}}>
          <Typography variant="h2">About Us</Typography>
        </Grid>
        <Grid item xl={1} md={1}>
        </Grid>
        <Grid item xl={10} md={10} xs={12}>
          <Typography variant="h5" style={{color:'gray', paddingBottom:10}}>
            Business text messaging software has come a long way in the last decade. Because of its effectiveness, text message marketing has boomed and there are a lot of new software providers on the market.
          </Typography>
          <Typography variant="h5" style={{color:'gray', paddingBottom:10}}>
            While some companies are simply looking for the absolute lowest cost software or are lured by slick packaging, smart businesses are on the hunt for the full package. Business text messaging is a mature marketing channel with lots of software providers. Therefore, companies should be picky about their software decisions because there is a wide range of options on the table.
          </Typography>  
          <Typography variant="h5" style={{color:'gray'}}>
            We've been around for over 10 years, have served over 160,000 organizations and our customers have sent billions of texts. During that time, we've come to a solid understanding of what makes a text messaging software for business outstanding.
          </Typography>
        </Grid>
        <Grid item xl={1} md={1}>
        </Grid>
      </Grid>
    </div>
  );
}