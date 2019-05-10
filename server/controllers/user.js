const { hash } = require('../helpers/bcryptjs')
const { compare } = require('../helpers/bcryptjs')
const { sign } = require('../helpers/jwt')
const { User } = require('../models')

class ControllerUser {
  static create(req, res) {
    let input = req.body
    console.log(input)
    let hashed = hash(input.password)
    let newUser = {
      name : req.body.name,
      email : req.body.email,
      password : hash(req.body.password)
    }
    User.create(newUser)
      .then(data => {
        res.status(201).json({ data })
      })
      .catch(err => res.status(500).json({ message: err.message }))
  }
  static findAll(req, res) {
    User.find()
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => res.status(500).json({message: err.message}))
  }
  static findOne(req, res) {
    User.findOne({_id: req.params.id})
      .then(user => {
        res.status(200).json(user)
      })
      .catch(err => {res.status(500).json({message: err.message})})
  }
  static update(req, res) {
    User.findOneAndUpdate({_id: req.params.id}, req.body, { new: true })
    .then(user => {
      res.status(200).json(user)
    })
    .catch(err => res.status(500).json({message: err.message}))
  }
  static delete(req, res) {
    User.findOneAndDelete({_id: req.params.id})
      .then(user => {
        const response = {
          message: 'Successfully deleted user.',
          id: req.params.id
        }
        res.status(200).json(response)
      })
      .catch(err => {res.status(500).json({message: err.message})})
  }

  static login(req, res) {
    let { email, password } = req.body
    User.findOne({ email: req.body.email })
      .then(user => {
        if (!user) {
          res.status(401).json({ message: 'user tidak ada/ password salah' })
        } else {
          if (!compare(req.body.password, user.password)) {
            res.status(401).json({ message: 'user tidak ada/ password salah' })
          } else {
            let obj = {
              id: user._id,
            }
            let token = sign(obj)
            res.status(201).json({
              token,
              name: user.name,
              id: user._id,
              email
            })
          }
        }
      })
      .catch(err => {
        res.status(500).json({ err: err.message })
      })
  }
}

module.exports = ControllerUser