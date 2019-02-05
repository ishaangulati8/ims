const router=require('express').Router;
const jwt=require('jsonwebtoken');
//const passport=require('passport');
const passport=require('../../utilities/passport');
require('dotenv').config();

router.post('/login',(req,res,next)=>{
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
