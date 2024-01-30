const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passportConfig = require('./lib/passportConfig');
const cors = require('cors');
const fs = require('fs');
require('dotenv').config();

// MongoDB
mongoose
  .connect('mongodb+srv://namanattlee:naman2001@bee.hii2tix.mongodb.net/HireHub?retryWrites=true&w=majority', {
  // .connect('mongodb+srv://namanattlee:naman2001@bee.hii2tix.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then((res) => console.log('Connected to DB'))
  .catch((err) => console.log(err));

// initialising directories
if (!fs.existsSync('./public')) {
  fs.mkdirSync('./public');
}
if (!fs.existsSync('./public/resume')) {
  fs.mkdirSync('./public/resume');
}
if (!fs.existsSync('./public/profile')) {
  fs.mkdirSync('./public/profile');
}

const app = express();
const port = 4444;

app.use(bodyParser.json({limit: '10mb'})); // support json encoded bodies
app.use(bodyParser.urlencoded({limit: '10mb', extended: true})); // support encoded bodies

// Setting up middlewares
app.use(cors());
app.use(express.json());
app.use(passportConfig.initialize());

// Routing
app.use('/auth', require('./routes/authRoutes'));
app.use('/api', require('./routes/apiRoutes'));
app.use('/upload', require('./routes/uploadRoutes'));
app.use('/host', require('./routes/downloadRoutes'));

app.listen(port, () => {
  console.log(`Server started on port ${port}!`);
});