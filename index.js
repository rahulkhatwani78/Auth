const express = require('express');
const app = express();

// Import Routes
const authRoute = require('./routes/auth');

// Route Middle wares
app.use('/api/user', authRoute);

app.listen(3000, () => {
    console.log("Server up & running");
});