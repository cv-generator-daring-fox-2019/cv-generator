const { CV } = require('../models')

class CvController {
  static create(req, res) {
    console.log(req.user)
    CV.create({
      fullName: req.body.fullName,
      email: req.body.email,
      workExp: req.body.workExp,
      project: req.body.project,
      academic: req.body.academic,
      hobby: req.body.hobbies,
      skill: req.body.skill,
      url: req.file.cloudStoragePublicUrl,
      userId: req.user._id
    })
      .then(value => {
        res.status(200).json(value)
        //    return User.findOneAndUpdate({_id : req.loggedUser.id}, { "push": { todoList: value._id }}, {new : true})
      })
      // .then(value =>{
      //     res.status(200).json(value)
      // })
      .catch(err => {
        console.log('masuk error');
        res.status(500).json({
          msg: `internal server error`
        })
      })
  }
  static findMyCVs (req, res) {
    console.log(req.user._id)
    CV.find({userId: req.user._id})
      .then( cvs => {
        res.status(200).json(cvs)
      })
      .catch(err => {
        console.log({err})
        res.status(500).json(err)
      })
  }
}
module.exports = CvController