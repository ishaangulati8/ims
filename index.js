require('dotenv').config()
const express = require('express');

const app = express();

const bodyparser = require('body-parser');

const passport = require('passport');

const passportLocal = require('passport-local');

const morgan = require('morgan');

const router = require('./routes');

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

 app.post('/login',(req,res,next)=>{
    passport.authenticate('local',{session:false},(err,user,info)=>{
        if(err){
            return next(err);
        }
        if(user){
            req.login(user, {session: false}, (err) => {
                if (err) {
                    res.send(err);
                }
            })    
            res.json({
                success:true
            })
            const token = jwt.sign(user, process.env.secret);
            return res.json({user, token});
        }else{
            res.json({
                success:false
            })
        }
    })(req,res,next);
});     
