<<<<<<< HEAD
=======
require('dotenv').config()
>>>>>>> cecf3d1f547b14fa3b3a689730e6ea0f843b9498

const express = require('express');
require('dotenv').config();

const app = express();

const bodyparser = require('body-parser');

const passport = require('passport');

<<<<<<< HEAD
const jwt=require('jsonwebtoken');

const passportLocal = require('passport-local');

=======
>>>>>>> cecf3d1f547b14fa3b3a689730e6ea0f843b9498
const morgan = require('morgan');

const router = require('./routes');

<<<<<<< HEAD



=======
const localStatergy = require('./utils/localStatergy');

app.use(passport.initialize());

app.use(localStatergy)
>>>>>>> cecf3d1f547b14fa3b3a689730e6ea0f843b9498

/**
 * Using morgan for logging
 */
//app.use(morgan);
/**
 * Initializing passport
 */
app.use(passport.initialize());

/**
 * Use json 
 */
app.use(bodyparser.json());

/**
 * Middle Ware for handling the requests.
 */
app.use('/api', router);

/**
 * Gloabal Error Handler.
 */
 app.use((error, req, res, next) =>{
     res.json({
        error,
     })
 } );

 app.listen(process.env.PORT_NO, () => {
         console.log('Working '+ process.env.PORT_NO);
 });

