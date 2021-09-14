const jwt = require('jsonwebtoken');
const SECRET = require('../config/authSecret.json');

module.exports = {
   authUser (req, res, next) {

      const authHeader = req.headers.authorization;

      if (!authHeader) {
         return res.status(401).send({ error: "Authorization Header not found" });
      }

      const parts = authHeader.split(' ');
      console.log(parts.length)

      if (parts.length !== 2) {
         return res.status(400).send({ error: "Token must have 2 parts" });
      }

      const [ tokenType, token ] = parts;

      jwt.verify(token, SECRET.key, (err, decoded) => {
         if (err) {
            return res.status(401).send({ error: "Token invalid", msg: err });
         }

         req.userId = decoded.id;
         return next(); 
      });

   }
}