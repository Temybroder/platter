const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  // Load User
let db = require('../config/keys');
let User =  require('../models/User');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');


// Load Assigned Complete Project Model
let Completepform =  require('../models/Completepform');

// Load Bizname Model
let Biznameform =  require('../models/Biznameform');
let Biznameupload =  require('../models/Biznameupload');


// Load Cooperative Model
let Coopform =  require('../models/Coopform');
let Coopupload =  require('../models/Coopupload');


// Load Private Limited Company Model
let Privatelimitedform =  require('../models/Privatelimitedform');
let Privatelimitedupload =  require('../models/Privatelimitedupload');


// Load Limited by Guarantee Company Model
let Limbygform =  require('../models/Limbygform');
let Limbygupload =  require('../models/Limbygupload');


// Load Changename with Guardian Newspaper Model
let Nameguardform =  require('../models/Nameguardform');
let Nameguardupload =  require('../models/Nameguardupload');


// Load Changename with Punch Newspaper Model
let Namepunchform =  require('../models/Namepunchform');
let Namepunchupload =  require('../models/Namepunchupload');


// Load Changename with The Sun Newspaper Model
let Namesunform =  require('../models/Namesunform');
let Namesunupload =  require('../models/Namesunupload');


// Load Changename with Vanguard Newspaper Model
let Namevanform =  require('../models/Namevanform');
let Namevanupload =  require('../models/Namevanupload');


// Load Changename with Thisday Newspaper Model
let Namethisdayform =  require('../models/Namethisdayform');
let Namethisdayupload =  require('../models/Namethisdayupload');


// Home Page
router.get('/welcome', forwardAuthenticated, (req, res) => res.render('welcome'));

// About Page
router.get('/about', (req, res) => res.render('about'));

// Services Page
router.get('/services', forwardAuthenticated, (req, res) => res.render('services'));

// Contact Page
router.get('/contact', (req, res) => res.render('contact'));


// Understand-More Page
router.get('/understand', (req, res) => res.render('understand'));

// Settings Page
router.get('/settings', ensureAuthenticated, (req, res) =>
  res.render('settings', {
    user: req.user
  })
);
// Security Page
router.get('/security', ensureAuthenticated, (req, res) =>
  res.render('security', {
    user: req.user
  })
);


// Projects Page
router.get('/projects', ensureAuthenticated, (req, res) =>
  res.render('projects', {
    user: req.user
  })
);


// Page to Submit Completed Project
router.get('/subclp', ensureAuthenticated, (req, res) =>
  res.render('completedlawproj', {
    user: req.user
  })
);


// Notifications Page
router.get('/notifications', ensureAuthenticated, (req, res) =>
  res.render('notifications', {
    user: req.user
  })
);


// Project Dasboard Page
router.get('/lpjs', ensureAuthenticated, (req, res) =>
  res.render('lawproject', {
    user: req.user
  })
);


// Table Page
router.get('/security', ensureAuthenticated, (req, res) =>
  res.render('security', {
    user: req.user
  })
);



  // Gets All Populated Users
router.get("/allusers", ensureAuthenticated, (req, res) => {
	User.find()
	.populate('project')
  .exec(function(err, users){
    if (err) {
      res.send('something went really wrong');
      next(); 
      }
    res.render('alluserstable', {users})})
});


  // Gets All Populated Coopforms
  router.get("/allcoops", ensureAuthenticated, (req, res) => {
    Coopform.find()
    .populate('submittedby')
    .exec(function(err, coopforms){
      if (err) {
        res.send('something went really wrong');
        next(); 
        }
      res.render('allcooptable', {coopforms})})
  });
  

  // count: users.length;

// Get Single User
router.get("/user/:Id", ensureAuthenticated, (req, res) => {
  User.findById(req.params._id)
  .populate('project')
  .exec(function(err, user){
    if (err) {
      res.send('something went really wrong');
      }
    res.render('viewproject', {user: user})})})


// Second Get Single User Route
router.get("/find/:_id", ensureAuthenticated, (req, res) => {
  User.findById(req.params._id)
  .populate('project')
	.then(user =>  res.render('viewproject', {user}))
	.catch(err => res.status(400).json( `No User with the id of ${req.params.id}`))
  })    



// POPULATED REGISTRATION OBJECT
router.get('/finduser', ensureAuthenticated, function(req, res){
  User.findOne({_id: req.params._id })
  .populate('project')
  .exec(function(err, user){
    if (err) {
      res.send('something went really wrong');
      }
      res.json({user})
})
  });


// POPULATED REGISTRATION OBJECT
router.get('/popus', ensureAuthenticated, function(req, res){
  User.findOne({ email: 'temybroder@gmail.com' }).
  populate('project').
  exec(function(err, user){
      if (err) return handleError(err);
      res.json({user})
}
  )
  });


// Get Single Coopform
router.get("/coop/:_id", ensureAuthenticated, (req, res) => {
  Coopform.findById(req.params._id)
  .populate('submittedby')
  .exec(function(err, coopform){
    if (err) return handleError(err);
    res.render('viewcoop', {coopform})
}
)
})                    


 router.post("/delete/:id", (req, res) => {
   Puppy.findByIdAndDelete(req.params.id)
   .then(() => {
    req.flash(
      'success_msg',
      'User deleted'
    );
    res.redirect('/dashboard');
  })
            .catch(err => {
              res.status(500).json({
                error: err
              });
            });
 })

module.exports = router;
