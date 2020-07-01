import React, { useState,useEffect }  from 'react';
import { connect} from "react-redux";

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import { setMessage } from "../redux/actions/fetchCapsules";
import { getLaunchPadById } from "../redux/actions/getLaunchPad";
// import { ReactComponent as NewRocket } from "../assets/newRocket.jpg";
import { ReactComponent as NewRocket } from "../assets/newRocket.jpg";
import useFetch from "../redux/actions/getBackendData";


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
    const {getLaunchPadById, setMessage} = props;
    const classes = useStyles();
    const [launchPadId, setLaunchPadId] = useState("");

    const updateState = (data) => {
        console.log(data);
        setMessage(data);
    };
    

    const [shouldFetchCapsule, setShouldFetchCapsule] = useState(false);
    const [shouldFetchLPad, setShouldFetchLPad] = useState(false);
    const [fetchCapsuleData] = useFetch('http://localhost:4000/capsules', shouldFetchCapsule, setShouldFetchCapsule, updateState);
    const [fetchLaunchPadData] = useFetch('http://localhost:4000/landingPad/'+launchPadId, shouldFetchLPad, setShouldFetchLPad, updateState);

    const onChange = (target) => {
        setLaunchPadId(target.value);
        console.log(target.value);
    };

    const getLaunchPad = () => {
        console.log(launchPadId);
        getLaunchPadById(launchPadId);
    };

    return (
        <Grid item container className={classes.root} xs={4} md={12}>
                <Grid item container className={classes.capsule} xs={12} md={3}>
                    <Button variant="contained" color="primary" onClick={() => {setShouldFetchCapsule(true)}}>
                        Capsules
                    </Button>
                </Grid>
                <Grid item container className={classes.capsule} xs={12} md={3}>
                    <img height= "100" src={ require('../assets/newRocket.jpg') } />
                    {/* <NewRocket/> */}
                </Grid>
                <Grid item container className={classes.capsule} xs={12} md={3}>
                    <TextField inputProps={{maxLength: 15}} id="outlined-basic" label="Landing Pad Id" variant="outlined" value={launchPadId} onChange={e => onChange(e.target)}/>
                </Grid>
                <Grid item container className={classes.capsule} xs={12} md={3}>
                    {
                        launchPadId.length > 0 && !(['#','$','%','&'].some(substring=>launchPadId.includes(substring))) ? 
                        <Button variant="contained" color="primary" onClick={() => setShouldFetchLPad(true)}>
                            Landing Pad
                        </Button> :
                        <Button variant="contained" disabled color="primary" onClick={() => setShouldFetchLPad(true)}>
                            Landing Pad
                        </Button>
                    }

                </Grid>               
        </Grid>
    );
};
  
const mapDispatchToProps = dispatch => {
    return {
      getLaunchPadById: (id) => dispatch(getLaunchPadById(id)),
      setMessage: (data) => dispatch(setMessage(data))
    };
};

export default connect(null,mapDispatchToProps)(Controls);
  




