const path = require('path');
const axios = require("axios");

const express = require('express');

const router = express.Router();

const routeDir = require('../util/path');

router.get("/capsules", async (req,res,next) => {

    console.log("capsule middleware hit");
    const url = "https://api.spacexdata.com/v3/capsules";

    try {
      const response = await axios.get(url);
      const dataArray = response.data;
      dataArray.sort((a,b) => a.original_launch_unix > b.original_launch_unix);
      const data = JSON.stringify(dataArray,null, 4);
      res.setHeader('Content-Type', 'application/json');
      res.end(data);

    } catch (error) {
      console.log(error);
    }
});

module.exports = router;
