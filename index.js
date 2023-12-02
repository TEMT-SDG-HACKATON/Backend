const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const dotenv = require('dotenv');
const cors = require('cors');

const authRoutes = require('./Routes/authRoutes');
const cardRoutes = require('./Routes/cardRoutes');
const investmentRoutes = require('./Routes/investmentRoutes');

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();


mongoose.connect(process.env.DB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB database'));


passport.use(require('../passport'));

app.use('/auth', authRoutes);
app.use('/card', cardRoutes);
app.use('/investment', investmentRoutes);

app.listen(3000, () => console.log('Server listening on port 3000'));
