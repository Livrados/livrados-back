const { response: res } = require('express');
const User = require('../models/user');

async function tryToLogin (req, res) {

   console.log(req);

   if (!req.body)
      return res.status(400).send({ error: 'Cannot find body into the request' });

   const { email, password } = req.body;

   console.log(email + ' | ' + password + ' EU CHEGUEI AQUI');

   if (!email || !password) {
      return res.status(400).send({ error: 'Missing email or password' });
   }

   try {
      const user = await User.findOne({ email }).select('+password');
   
      if (!user)
         return res.status(400).send({ error: 'User not found' });
   
      if (password !== user.password)
         return res.status(400).send({ error: 'Email or password incorrect' });
   
      return res.status(200).send({ success: 'Login completed. Welcome ' + user.name + '!' });   
   } catch (err) {
      return res.status(400).send({ error: 'There are some problem when trying to talk to bd: ' + err });
   }

};

module.exports = tryToLogin;