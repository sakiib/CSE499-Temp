const express = require('express');
const app = express();
const env = require('dotenv');
env.config();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(express.json());

const authRoutes = require('./routes/auth');

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.ssrhj.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`, 
    {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}
).then(() => {
    console.log('database connect successfully!');
});

app.use('/api', authRoutes);

app.listen(process.env.PORT, () => {
    console.log(`server running on port: ${process.env.PORT}`);
});