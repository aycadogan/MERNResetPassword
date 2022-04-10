const mongoose = require('mongoose')
const connect = mongoose.connect(process.env.MONGODB_URL)
connect.then(() => console.log('connected to db')).catch(err=> console.log(err))