const mongoose = require('mongoose');
mongoose.connect(`mongodb://localhost/${process.env.MONGO_COLLECTION}`, {useNewURLParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
    //we're connected!
    console.log("Mongoose online")
         });

