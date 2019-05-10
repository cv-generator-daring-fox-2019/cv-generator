const {CV} = require('../models')

class CvController{
    static create(req,res){
            CV.create({
                fullName : req.body.fullName,
                email: req.body.email,
                workExp: req.body.workExp,
                project: req.body.skill,
                academic : req.body.academic,
                hobby: req.body.hobby,
                skill: req.body.skill,
                url: req.file.cloudStoragePublicUrl
            })
            .then(value =>{
                res.status(200).json(value)
            //    return User.findOneAndUpdate({_id : req.loggedUser.id}, { "push": { todoList: value._id }}, {new : true})
            })
            // .then(value =>{
            //     res.status(200).json(value)
            // })
            .catch(err =>{
                console.log('masuk error');
                res.status(500).json({
                    msg: `internal server error`
                })
            })
        }
}
// (req, res) => {
//     res.send({
//       status: 200,
//       message: 'Your file is successfully uploaded',
//       link: req.file.cloudStoragePublicUrl
//     })
//   }
module.exports = CvController