const path = require('path');
const axios = require("axios");

const express = require('express');

const router = express.Router();

const routeDir = require('../util/path');
const spaceData = require('../models/spaceData');


router.get("/landingPad/:id", async (req,res,next) => {
    console.log("landing middleware hit");
    const id = req.params.id;

    if (id === undefined || id.length < 2){
        const data = JSON.stringify({error: "ID is not in the required format. Should be greater than 2 digits"},null, 2);
        res.setHeader('Content-Type', 'application/json');
        res.end(data);
    }
    let datafromDb = "";
    let data = "";

    await spaceData.findAll({where: { id: id }})
    .then(landingPadData => {
        datafromDb = landingPadData;
    });
    
    if(datafromDb !== undefined && datafromDb.length > 0){
        const obj = {
            id: id,
            fullname: datafromDb[0].fullname,
            status: datafromDb[0].status,
            location: datafromDb[0].location
        };

        data = JSON.stringify(obj);
        res.setHeader('Content-Type', 'application/json');
        res.end(data);
    }
    else{
        const url = "https://api.spacexdata.com/v3/landpads/"+id;
        try {
            const response = await axios.get(url);

            await spaceData.create({
                id:id,
                fullname: response.data["full_name"],
                status: response["status"],
                location: response["location"],
            });

            const data = JSON.stringify(response.data,null, 2);
            res.setHeader('Content-Type', 'application/json');
            res.end(data);
        } catch (error) {
            // console.log(error);
            const data = JSON.stringify({data: "this id does not exist"},null, 2);
            res.setHeader('Content-Type', 'application/json');
            res.end(data);;
        }
        
    }
    });

module.exports = router;
