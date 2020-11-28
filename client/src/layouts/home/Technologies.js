import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography, Checkbox } from '@material-ui/core';
import Aos from 'aos'
import 'aos/dist/aos.css'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  techItems:{
    textAlign:'center'
  },
  techItem:{
    display:'inline-flex',
    margin:10
  },
  skill:{
    display:'inline-flex'
  },
  techText:{
    color:'lightgray',
    fontSize:18,
    paddingTop:12
  }
}));

const Technologies=()=> {
  const classes = useStyles();

  useEffect(()=>{
    Aos.init({duration:1000})
  }, [])

  return (
    <div className={classes.root} id="technologies" style={{marginTop:30}}>
      <Grid container spacing={3}>
        <Grid item xl={12} md={12} xs={12} style={{textAlign:'center'}}>
          <Typography variant="h1" style={{color:'lightgray'}}>Technologies we use</Typography>
        </Grid>
        <Grid item xl={12} md={12} xs={12} data-aos='fade-up' className={classes.techItems}>
          <Typography variant="h3" style={{color:'lightgray'}}>Programming language</Typography>
          <div className={classes.skill} id="skill">
            <div className={classes.techItem} id="techItem">
              <Checkbox style={{color:'lightgray', marginBottom:5}} disabled checked value="C" />
              <Typography className={classes.techText} variant="h5">C</Typography>
            </div>
            <div className={classes.techItem} id="techItem">
              <Checkbox style={{color:'lightgray', marginBottom:5}} disabled checked value="C" />
              <Typography className={classes.techText} variant="h5">C++</Typography>
            </div>
            <div className={classes.techItem} id="techItem">
              <Checkbox style={{color:'lightgray', marginBottom:5}} disabled checked value="C" />
              <Typography className={classes.techText} variant="h5">Javascript</Typography>
            </div>
            <div className={classes.techItem} id="techItem">
              <Checkbox style={{color:'lightgray', marginBottom:5}} disabled checked value="C" />
              <Typography className={classes.techText} variant="h5">TypeScript</Typography>
            </div>
          </div>  
        </Grid>
        <Grid item xl={12} md={12} xs={12} data-aos='fade-up' className={classes.techItems}>
          <Typography variant="h3" style={{color:'lightgray'}}>Backend technologies</Typography>
          <div className={classes.skill} id="skill">
            <div className={classes.techItem}>
              <Checkbox style={{color:'lightgray', marginBottom:5}} disabled checked value="C" />
              <Typography className={classes.techText} variant="h5">Nodejs</Typography>
            </div>
            <div className={classes.techItem}>
              <Checkbox style={{color:'lightgray', marginBottom:5}} disabled checked value="C" />
              <Typography className={classes.techText} variant="h5">Expressjs</Typography>
            </div>
            <div className={classes.techItem}>
              <Checkbox style={{color:'lightgray', marginBottom:5}} disabled checked value="C" />
              <Typography className={classes.techText} variant="h5">Socket.io</Typography>
            </div>
            <div className={classes.techItem}>
              <Checkbox style={{color:'lightgray', marginBottom:5}} disabled checked value="C" />
              <Typography className={classes.techText} variant="h5">Mongodb</Typography>
            </div>
            <div className={classes.techItem}>
              <Checkbox style={{color:'lightgray', marginBottom:5}} disabled checked value="C" />
              <Typography className={classes.techText} variant="h5">Firebase</Typography>
            </div>
            <div className={classes.techItem}>
              <Checkbox style={{color:'lightgray', marginBottom:5}} disabled checked value="C" />
              <Typography className={classes.techText} variant="h5">Mysql</Typography>
            </div>
          </div>  
        </Grid>
        <Grid item xl={12} md={12} xs={12} data-aos='fade-up' className={classes.techItems}>
          <Typography variant="h3" style={{color:'lightgray'}}>Frontend technologies</Typography>
          <div className={classes.skill} id="skill">
            <div className={classes.techItem}>
              <Checkbox style={{color:'lightgray', marginBottom:5}} disabled checked value="C" />
              <Typography className={classes.techText} variant="h5">Reactjs</Typography>
            </div>
            <div className={classes.techItem}>
              <Checkbox style={{color:'lightgray', marginBottom:5}} disabled checked value="C" />
              <Typography className={classes.techText} variant="h5">Angular</Typography>
            </div>
            <div className={classes.techItem}>
              <Checkbox style={{color:'lightgray', marginBottom:5}} disabled checked value="C" />
              <Typography className={classes.techText} variant="h5">React Native</Typography>
            </div>
            <div className={classes.techItem}>
              <Checkbox style={{color:'lightgray', marginBottom:5}} disabled checked value="C" />
              <Typography className={classes.techText} variant="h5">Electronjs</Typography>
            </div>
            <div className={classes.techItem}>
              <Checkbox style={{color:'lightgray', marginBottom:5}} disabled checked value="C" />
              <Typography className={classes.techText} variant="h5">Material UI</Typography>
            </div>
            <div className={classes.techItem}>
              <Checkbox style={{color:'lightgray', marginBottom:5}} disabled checked value="C" />
              <Typography className={classes.techText} variant="h5">Bootstrap</Typography>
            </div>
            <div className={classes.techItem}>
              <Checkbox style={{color:'lightgray', marginBottom:5}} disabled checked value="C" />
              <Typography className={classes.techText} variant="h5">HTML5</Typography>
            </div>
            <div className={classes.techItem}>
              <Checkbox style={{color:'lightgray', marginBottom:5}} disabled checked value="C" />
              <Typography className={classes.techText} variant="h5">CSS3</Typography>
            </div>
          </div>  
        </Grid>
        <Grid item xl={12} md={12} xs={12} data-aos='fade-up' className={classes.techItems}>
          <Typography variant="h3" style={{color:'lightgray'}}>Tools</Typography>
          <div className={classes.skill} id="skill">
            <div className={classes.techItem}>
              <Checkbox style={{color:'lightgray', marginBottom:5}} disabled checked value="C" />
              <Typography className={classes.techText} variant="h5">Webpack</Typography>
            </div>
            <div className={classes.techItem}>
              <Checkbox style={{color:'lightgray', marginBottom:5}} disabled checked value="C" />
              <Typography className={classes.techText} variant="h5">Grunt</Typography>
            </div>
            <div className={classes.techItem}>
              <Checkbox style={{color:'lightgray', marginBottom:5}} disabled checked value="C" />
              <Typography className={classes.techText} variant="h5">Gulp</Typography>
            </div>
            <div className={classes.techItem}>
              <Checkbox style={{color:'lightgray', marginBottom:5}} disabled checked value="C" />
              <Typography className={classes.techText} variant="h5">Redux</Typography>
            </div>
          </div>  
        </Grid>
      </Grid>
    </div>
  );
}
export default Technologies;