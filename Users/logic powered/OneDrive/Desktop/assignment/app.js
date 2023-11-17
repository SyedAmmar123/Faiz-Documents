// Imports
const express = require('express')
const config = require('./config');
const app = express()
const port = 5000

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

//Connecting to the database

mongoose.connect(config.database, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('successfully connected to MongoDB');
    }).catch(err => {
        console.log('Could not connect to MongoDB.');
        process.exit();
    })

app.use(express.urlencoded({extended: false}));
app.use(express.json())

// Importing Controllers
const mainController = require('./controllers/mainController');
const crudController = require('./controllers/crudController');


// Static Files
app.use("/public", express.static('public'));

// Set Templating Engine
app.set('view engine', 'ejs')

// Routes
app.get('/', mainController.home);
app.get('/list', crudController.list);
app.get('/create', crudController.createPage);
app.post('/create', crudController.create);
app.get('/edit/:id', crudController.editPage);
app.post('/edit/:id', crudController.edit);
app.get('/delete/:id', crudController.confirmDelete);
app.post('/delete/:id', crudController.delete);


// Listen on Port 3000
app.listen(port, () => console.info(`App listening on port ${port}`))