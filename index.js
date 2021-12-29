const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Import Routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

// killall -s KILL node

//Type-1
//require('dotenv/config');

//Type-2
const dotenv = require('dotenv');
dotenv.config();

// Connect to DB
mongoose.connect(
    process.env.DB_CONNECT,
    () => console.log("Connected to DB")
);

// Middlewares
app.use(express.json());

// Route Middle wares
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);

app.listen(3000, () => {
    console.log("Server up & running");
});