import React, { useState,useEffect }  from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    border: "2px solid black",
    padding: "2px",
    justify: "space-around",
  },
  capsule: {
      height: "15vh",
      border: "2px solid black",
      justifyContent: "center",
      alignContent: "center"
  }
}));

const Controls = props => {
    const classes = useStyles();
    const [launchPadId, setLaunchPadId] = useState("");

    const onChange = (target) => {
        setLaunchPadId(target.value);
        console.log(target.value);
    };

    return (
        <Grid item container className={classes.root} xs={4} md={12}>
                <Grid item container className={classes.capsule} xs={12} md={3}>
                    <Button variant="contained" color="primary" onClick={() => {console.log("clicked")}}>
                        Capsules
                    </Button>
                </Grid>
                <Grid item container className={classes.capsule} xs={12} md={3}>
                    <img height= "100" alt="rocket" src={ require('../assets/newRocket.jpg') } />
                    {/* <NewRocket/> */}
                </Grid>
                <Grid item container className={classes.capsule} xs={12} md={3}>
                    <TextField inputProps={{maxLength: 15}} id="outlined-basic" label="Landing Pad Id" variant="outlined" value={launchPadId} onChange={e => onChange(e.target)}/>
                </Grid>
                <Grid item container className={classes.capsule} xs={12} md={3}>
                    {
                        launchPadId.length > 0 && !(['#','$','%','&'].some(substring=>launchPadId.includes(substring))) ? 
                        <Button variant="contained" color="primary" onClick={() => console.log("clicked")}>
                            Landing Pad
                        </Button> :
                        <Button variant="contained" disabled color="primary" onClick={() => console.log("clicked")}>
                            Landing Pad
                        </Button>
                    }

                </Grid>               
        </Grid>
    );
};
  
export default Controls;