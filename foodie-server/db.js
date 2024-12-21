const mongoose = require('mongoose')

const Connection = async (username = 'usercode', password = 'codeforinterview') => {
    const URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@foodie-cluster.ypjhw.mongodb.net/?retryWrites=true&w=majority&appName=foodie-cluster`

    try {
        await mongoose.connect(URL);
        console.log('Database connected successfully');
    } catch (error) {   
        console.log('Error while connecting with the database ', error);
    }
}

module.exports =  Connection;
