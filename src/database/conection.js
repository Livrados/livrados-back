const mongoose = require ('mongoose');


function connToDatabase() {
   mongoose.connect(
      'mongodb+srv://admin:admin@livrados.xxxns.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
      {
         useNewUrlParser: true,
         useUnifiedTopology: true
      }
   );

   const db = mongoose.connection;
   db.on('error', err => console.error("❌ Failed to connect to MongoDB: " + err));
   db.once('open', () => console.log('✔ Connected to MongoDB'))
}

module.exports = connToDatabase;