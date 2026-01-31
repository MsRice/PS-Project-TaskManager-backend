const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log(`All the way live with mon-🪿 -- ${mongoose.connection.name}`)
    })
    .catch((error) => {
        console.error("😬 Yeah that didn't work, you're NOT connected to the DB 🫰🏾");
        
    })

    mongoose.connection.once('error' , (error) => {
        console.error( 'MongodDB === 🔥🗑️🗑️🔥' , error);
        
    })