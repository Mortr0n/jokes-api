const mongoose = require('mongoose');

const dbName = 'jokes';

mongoose.connect('mongodb://localhost/' + dbName, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Connection to ${dbName} established`))
    .catch((err) => console.log(`Unable to establish connection to ${dbName}`, err))