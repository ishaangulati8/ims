require('dotenv').config()

const express = require('express');
require('dotenv').config();

const app = express();

const bodyparser = require('body-parser');

const passport = require('passport');

const morgan = require('morgan');

const router = require('./routes');

const localStatergy = require('./utils/localStatergy');

app.use(passport.initialize());

app.use(localStatergy)

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

