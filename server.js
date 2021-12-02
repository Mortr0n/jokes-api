
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./config/mongoose.config');
require('./routes/joke.route')(app);

const portNumber = 8000;

app.listen(portNumber, ()=>console.log(`Server connected on port ${portNumber}`));