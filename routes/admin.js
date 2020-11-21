const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

  // Load User
  let db = require('../config/keys');
  let User =  require('../models/User');
  let Biznameform =  require('../models/Biznameform');
  const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

  let Coopform =  require('../models/Coopform');


// Get Single Coopform
router.get("/test/:_id", ensureAuthenticated, (req, res) => {
	User.findById(req.params._id)
	.populate('project')
	.exec(function(err, user){
	  if (err) return handleError(err);
	  res.render('viewproject', {user})
  }
  )
  })                    
  


// ALL USERS
// Gets All Populated Users
router.get("/popallusers", (req, res, next) => {
	User.find()
	.lean()
	.populate('extra', 'coopname email')
	  .exec()
	  .then(docs => {
		res.status(200).json({
		  count: docs.length,
		  users: docs.map(doc => {
			return {
			  _id: doc._id,
			  project: doc.extra,
			  email: doc.email, 
			  name: doc.name,
			  Submitted: doc.date 
			};})});
	  })
	  .catch(err => {
		res.status(500).json({
		  error: err
		});
	  });
  });
  
  


//USER and LAWYERS
// Gets All Users
router.get('/allusers',  function (req, res) {
User.find({}, function (err, users)
{
if (err){
res.send('something went really wrong');
next(); 
}
res.render('alluserstable', {users});
}
)}
);



router.get("/coop/:id", (req, res, next) => {
	Coopform.findById(req.params.id)
	  .populate('user')
	  .exec()
	  .then(coopform => {
		if (!coopform) {
		  return res.status(404).json({
			message: "coopform not found"
		  });
		}
		res.status(200).json({
		  coopform: coopform,
		});
	  })
	  .catch(err => {
		res.status(500).json({
		  error: err
		});
	  });
  });
  


// Delete User
router.delete("/dusr/:id", async (req, res) => {
	try {
		await User.deleteOne({ _id: req.params.id })
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: "User Account doesn't exist!" })
	}
});


 module.exports = router;
