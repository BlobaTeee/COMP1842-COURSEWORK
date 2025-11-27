const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
global.Vocab = require('./api/models/vocabModel');
const routes = require('./api/routes/vocabRoutes');

mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://BobaApiDatabase:yy26112005@vocab-builder.qxdpztf.mongodb.net/?appName=vocab-builder');
const port = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


routes(app);
app.listen(port);
app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` });
});
console.log(`Server is running on port ${port}`);