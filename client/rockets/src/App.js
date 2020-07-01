import React from 'react';
import PropTypes from "prop-types";

import './App.css';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import withWidth from "@material-ui/core/withWidth";

import Screen from "./components/Screen";
import Controls from "./components/Controls";

const useStyles = makeStyles((theme) => ({
  root: {
    border: "2px solid blue",
    padding: "2px",
    height: "50vh",
    [theme.breakpoints.down("sm")]: {
      height: "100vh"
    }
  },
  mainroot:{
    border: "2px solid green",
    height: "100vh"
  }
}));


function App(props) {
  const {width} = props;
  const classes = useStyles();
  return (
      <Grid container className={classes.mainroot} justify="center" alignItems="center">
        <Grid item container className={classes.root} xs={12} md={6}>
          <Screen/>
          <Controls/>
        </Grid>
      </Grid>
  );
}

App.propTypes = {
  width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired
};

export default (withWidth())(App);
