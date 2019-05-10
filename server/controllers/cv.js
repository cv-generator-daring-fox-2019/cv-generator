const {CV} = require('../models')

class CvController{
    static create(req,res){
            console.log(req.body,'========')
            CV.create({
                fullName : req.body.fullName,
                workExp: req.body.workExp,
                academic : req.body.academic,
                skill: req.body.skill,
                project: req.body.skill,
                hobbies: req.body.skill,
                email: req.body.email
            })
            .then(value =>{
                // console.log(req.loggedUser,value);
                // res.status(200).json(value)
               return User.findOneAndUpdate({_id : req.loggedUser.id}, { "push": { todoList: value._id }}, {new : true})
            })
            .then(value =>{
                res.status(200).json(value)
            })
            .catch(err =>{
                console.log(err);
                res.status(500).json({
                    msg: `internal server error`
                })
            })
        }
}