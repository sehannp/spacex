const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')
const app = express();
const sequelize = require('./util/database');

const routeDir = require('./util/path');
// const Capsule = require('./models/capsule'); Can be modeled if required
const spaceData = require('./models/spaceData');

const capsuleRoutes = require('./routes/capsules');
const landingPadRoutes = require('./routes/landingPads');

app.get('/favicon.ico', (req, res) => res.status(204));
app.use(cors());

app.use(express.static(path.join(routeDir, 'public')));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(capsuleRoutes);
app.use(landingPadRoutes);


sequelize.sync({force:true})
.then(()=> {
    spaceData.build({ 
        id:"00",
        fullname:"Empty",
        status:"active",
        location:"nowhere"
    })
      .save()
      .then(() => {
        console.log('the data saved!');
      })
})
.then(()=>{
    app.listen(4000);
});