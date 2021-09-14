const { response } = require('express');
const User = require('../models/user');

async function tryToRegisterUser (req, res) {

   if (!req.body)
      return res.status(400).send({ error: 'Cannot find body into the request' });

   const {
      name,
      email,
      password,
      phone,
      cep,
      addressNumber
   } = req.body;

   if (!name || !email || !password || !phone || !cep || !addressNumber)
      return res.status(400).send({ error: 'Requisition missing parameters' });

   if (await User.findOne({ email }))
      return res.status(400).send({ error: 'Email has already been registered' });

   const user = new User({
      name,
      email,
      password,
      phone,
      cep,
      addressNumber
   });

   
   try {

      await user.save();
      user.password = undefined;
      return res.status(201).send({ success: 'User registered succesfully', user });

   } catch (err) {
      return res.status(400).send({ error: 'Problems when trying to save into bd: ' + err});
      console.log(err);
   }
}

module.exports = tryToRegisterUser;