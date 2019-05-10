const images = require('../middlewares/images')
const route = require('express').Router()
const {ControllerUser,ControllerCv} = require('../controllers')


route.get('/', (req, res) => {res.status(200).json({message: 'Home'})})
route.post('/register', ControllerUser.create)
route.post('/login', ControllerUser.login)

route.get('/users', ControllerUser.findAll)
route.get('/users/:id', ControllerUser.findOne)
route.put('/users/:id', ControllerUser.update)
route.delete('/users/:id', ControllerUser.delete)


route.post('/upload', images.multer.single('image'), images.sendUploadToGCS,  ControllerCv.create)


route.use('/*', (req, res) => res.status(404).json({error: 'Not Found :('}))

module.exports = route