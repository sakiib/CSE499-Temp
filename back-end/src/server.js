const express = require('express');
const app = express();
const env = require('dotenv');
env.config();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(express.json());

const userRoutes = require('./routes/user');

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.ssrhj.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`, 
    {useNewUrlParser: true, useUnifiedTopology: true}
).then(() => {
    console.log('database successfully connect!');
});

app.use('/api', userRoutes);

app.listen(process.env.PORT, () => {
    console.log(`server running on port: ${process.env.PORT}`);
});