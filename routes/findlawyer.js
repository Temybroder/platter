const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Find Lawyer
router.get('/findlawyer', ensureAuthenticated, (req, res) =>
  res.render('findlawyer', {
    users
  })
);

module.exports = router;
