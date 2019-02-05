const passport=require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const passportJWT=require('passport-jwt');
const JWTStrategy=passportJWT.Strategy;
const ExtractJWT=passportJWT.ExtractJwt;



// Load User model
const models = require('../models');

passport.use(
  new LocalStrategy({
    usernameField: 'userName',
    passwordField: 'password',
    passReqToCallback: true
  },
    async (req,username, password, done) => {
      try {
        // Match user
        const isUser = await models.Users.findOne({
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
      done(null,isUser);
    }else{
      done(null,false,{message:'Username not registered!'})
    }
      
  }catch(error){
    done(error);
  }
}
))

module.exports=passport;



 