// controllers/crudController.js

const YourModel = require('../models/crudModel');

const crudController = {
  list: async (req, res) => {
    try {
      const data = await YourModel.find();
      res.render('list', { data }); // Assuming you have a list.ejs file in the views folder
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  },

  createPage: (req, res) => {
    res.render('create'); // Assuming you have a create.ejs file in the views folder
  },

  create: async (req, res) => {
    try {
      const { title, description } = req.body;
      const newItem = new YourModel({ title, description });
      await newItem.save();
      res.redirect('/list');
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  },

  editPage: async (req, res) => {
    try {
      const { id } = req.params;
      const data = await YourModel.findById(id);
      res.render('edit', { data }); // Assuming you have an edit.ejs file in the views folder
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  },

  edit: async (req, res) => {
    try {
      const { id } = req.params;
      const { title, description } = req.body;
      await YourModel.findByIdAndUpdate(id, { title, description });
      res.redirect('/list');
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  },

  confirmDelete: async (req, res) => {
    try {
      const { id } = req.params;
      const data = await YourModel.findById(id);
      res.render('delete', { data }); // Assuming you have a delete.ejs file in the views folder
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      await YourModel.findByIdAndRemove(id);
      res.redirect('/list');
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  },

  // Other CRUD operations...
};

module.exports = crudController;
