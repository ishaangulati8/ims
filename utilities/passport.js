//const passport=require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const passport = require('passport');
const passportJWT=require('passport-jwt');
const JWTStrategy=passportJWT.Strategy;
const ExtractJWT=passportJWT.ExtractJwt;
require('dotenv').config();


// Load User model
const User = require('../models/index');

passport.use(
  new LocalStrategy({
    usernameField: 'username'
  },
    async (username, password, done) => {
      try {
        // Match user
        const isUser = await User.Users.findOne({
          where: {
            username: username
          }
        });
        if (isUser) {
          const match = await bcrypt.compare(password, isUser.password);
          if (match) {
            return done(null, isUser);
          } else {
            return done(null, false, { message: 'Password incorrect' });
          }
        } else {
          return done(null, false, { message: 'This username is not registered' });
        }



      } catch (error) {
        done(error);
      }
    }
  )
)
var opts={};
opts.jwtFromRequest=ExtractJWT.fromAuthHeaderAsBearerToken();
opts.secretOrKey= process.env.secret;

passport.use(new JWTStrategy(opts,
async (jwtPayload,done)=> {
  try{
    const isUser= await models.Users.findOneById(jwtpayload.id);
    if(isUser){
      return(null,isUser);
    }else{
      return(null,false,{message:'Username not registered!'})
    }
      
  }catch(error){
    done(error);
  }
}
))

module.exports=passport;



 