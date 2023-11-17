// controllers/mainController.js

const mainController = {
    home: (req, res) => {
      res.render('index'); // Assuming you have a home.ejs file in the views folder
    },
  };
  
  module.exports = mainController;
  