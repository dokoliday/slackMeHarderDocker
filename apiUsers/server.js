const express = require('express');
const app = express();
const PORT = 5201;
const url = `mongodb://alex:dokoliday@${process.env.DB_HOST}:27017/admin`;

const bodyParser = require("body-parser")
const dataController = require('./src/controllers/user');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: true
}))
let mongoose = require('mongoose');


mongoose.connect(url)
   .then(() => {
      console.log('Database connection successful')
   })
   .catch(err => {
      console.error('Database connection error',err)
   })

   app.get('/users', dataController.getUsers);
   app.get('/users/:name',dataController.getUserByName)
   app.post('/users', dataController.addUser);

app.listen(PORT, () => {
   console.log(`Server listening on port ${PORT}`);
});