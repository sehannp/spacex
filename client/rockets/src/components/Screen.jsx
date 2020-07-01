import React from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from "react-redux";
import Paper from '@material-ui/core/Paper';
import PropTypes from "prop-types";

import { makeStyles } from '@material-ui/core/styles';
import withWidth from "@material-ui/core/withWidth";

const useStyles = makeStyles((theme) => ({
  screenroot: {
    border: "2px solid black",
    height: "33.3vh",
    [theme.breakpoints.down("sm")]: {
      height: "100vh"
    }
  }
}));

const Screen = props => {
    const classes = useStyles();
    const {message,width} = props;

    return (
        <Grid item container className={classes.screenroot} xs={8} md={12}>
            <Grid item container xs={12} md={12} justify="center">
              {
                width === 'xs' ?
                <Paper style={{overflowY: 'auto', wordWrap: "break-word", overflowX: 'hidden', maxWidth: "66.6vh", maxHeight: "100vh"}}>
                  {message}
                </Paper> :
                <Paper style={{overflowY: 'auto', overflowX: 'hidden', maxWidth: "100vh", maxHeight: "33.33vh"}}>
                  {message}
                </Paper>               
              }

            </Grid>
        </Grid>
    );
};
  
const mapStateToProps = state => ({
    message: state.backendData.message,
});

Screen.propTypes = {
  width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired
};


export default connect(mapStateToProps)(withWidth()(Screen));
  