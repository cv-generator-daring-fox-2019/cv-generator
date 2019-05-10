const { verify } = require('../helpers/jwt');
const { User } = require('../models');

module.exports = {
  authenticate: function(req, res, next) {
    let token = req.headers.token;
    if (!token) {
      res.status(401).json({ error: 'You must login to access this endpoint' });
    } else {
      let decoded = verify(token, res);
      User
       .findOne({
         _id: decoded.id
       })
       .then(user => {
         if(user) {
           req.user = user;
           next();
         } else {
           res.status(401).json({ error: 'User is not valid' });
         }
       })
       .catch(err => {
         res.status(500).json(err)
       })
    }
  },
  authorize: function(req, res, next) {
  },
}
