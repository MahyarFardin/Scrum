const Application = require('./app/server');
const DB_URL = 'mongodb://localhost:27017/ProjectManagerDB'
// const DB_URL = 'mongodb+srv://test2:test2@cluster0.l2m5xaf.mongodb.net/?retryWrites=true&w=majority'
// const DB_URL = 'mongodb+srv://test2:test2@cluster0-xahr1.mongodb.net'
require('dotenv').config();
new Application(5000 , DB_URL)