const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async() => {

    try {
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('DB Online');
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la BD ver logs');
    }
    // yahoo
    // mongodb+srv://mean_user:9JxjFV5RqyDkqmjt@cluster0.hl2ob.mongodb.net/hospitaldb
    // mongodb://mean_user:9JxjFV5RqyDkqmjt@cluster0-shard-00-00.hl2ob.mongodb.net:27017,cluster0-shard-00-01.hl2ob.mongodb.net:27017,cluster0-shard-00-02.hl2ob.mongodb.net:27017/hospitaldb?replicaSet=atlas-fsfiwa-shard-0&ssl=true&authSource=admin
    // gmail
    // mongodb+srv://nico_admin:soYERgGpw7GEH7i8@cluster0.gtxe7.azure.mongodb.net/hospitaldb


}

module.exports = {
    dbConnection
}