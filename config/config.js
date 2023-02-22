    const mongoose = require('mongoose');
    require("colors");1
    const connectDb = async () => {
        try {
            const conn = await mongoose.connect(process.env.MONGO_URI, {
                useUnifiedTopology: true,
                useNewUrlParser: true,
                useCreateIndex: true,
            });
            console.log(`MongoDb Perfectly Connected ${conn.connection.host}`.yellow);
        } catch (error) {
            console.error(`Error : ${error.message}`.red);
            process.exit(1);
            
        }
    };
    module.exports = connectDb;