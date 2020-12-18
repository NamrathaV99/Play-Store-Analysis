var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
  res.render('helloworld', { title: 'Hello, World!' });
});

/* GET Userlist page. */
router.get('/userlist', function(req, res) {
  var db = req.db;
  var collection = db.get('playstore');
  collection.find({},{},function(e,docs){
      res.render('userlist', {
          "userlist" : docs
      });
  });
});

  /* GET New User page. */
router.get('/newuser', function(req, res) {
  res.render('newuser', { title: 'Add New User' });
});

/* POST to Add User Service */
router.post('/adduser', function(req, res) {

  // Set our internal DB variable
  var db = req.db;

  // Get our form values. These rely on the "name" attributes
  //var name = req.body.name1;
  //var email = req.body.email1;

  var sno = parseInt(req.body.sno);
  var app = req.body.app;
  var category = req.body.category;
  var rating = req.body.rating;
  var reviews = req.body.reviews;
  var size = req.body.size;
  var installs = req.body.installs;
  var type = req.body.type;
  var price = req.body.price;
  var content_rating = req.body.content_rating;
  var genres = req.body.genres;
  var last_updated = req.body.last_updated;
  var current_ver = req.body.current_ver;
  var android_ver = req.body.android_ver;

  //var result = 746;
  console.log(req.body.sno);
  // Set our collection
  var collection = db.get('playstore');

  // Submit to the DB
  collection.insert({
      _id : sno,
      "App" : app,
      "Category" : category,
      "Rating" : rating,
      "Reviews" : reviews,
      "Size" : size,
      "Installs" : installs,
      "Type" : type,
	  "Price": price,
	  "Content_Rating": content_rating,
	  "Genres": genres,
	  "Last_Updated": last_updated,
	  "Current_Ver": current_ver,
	  "Android_Ver": android_ver
  }, function (err, doc) {
      if (err) {
          // If it failed, return error
          res.send("There was a problem adding the information to the database.");
      }
      else {
          // And forward to success page
          res.redirect("/userlist");
      }
  });

});

router.get('/delete', function(req, res) {
  res.render('delete', { title: 'Delete a User' });
});

router.post('/deleteuser', function(req, res) {

  // Set our internal DB variable
  var db = req.db;

  // Get our form values. These rely on the "name" attributes
  var sno = parseInt(req.body.sno);
  

  // Set our collection
  var collection = db.get('playstore');

  // Submit to the DB
  collection.remove({
      _id : sno
  }, function (err, doc) {
      if (err) {
          // If it failed, return error
          res.send("There was a problem deleting the information from the database.");
      }
      else {
          // And forward to success page
          res.redirect("/userlist");
      }
  });

});

router.get('/update', function(req, res) {
  var db = req.db;
  var collection = db.get('playstore');
  collection.find({},{},function(e,docs){
      res.render('update', {
          "userlist" : docs,
          noData : ""
      });
  });
  //res.render('update', { title: 'Update database' });
});

router.post('/getuser', function(req, res) {

  // Set our internal DB variable
  var db = req.db;

  // Get our form values. These rely on the "name" attributes
  var sno = parseInt(req.body.sno);
  

  // Set our collection
  var collection = db.get('playstore');
  console.log(sno);
  // Submit to the DB
  collection.find({
      "_id":sno
  },
  {},
  function (err, doc) {
      if (err) {
          // If it failed, return error
          res.send("There was a problem updating the information into the database.");
      }
      else {
          // And forward to success page
          res.render("update", { "userlist": doc , noData: "No records to display"});
      }
  });

});


router.post('/updateuser', function(req, res) {

  // Set our internal DB variable
  var db = req.db;

  // Get our form values. These rely on the "name" attributes
  var sno = parseInt(req.body.sno);
  var app = req.body.app;
  var category = req.body.category;
  var rating = req.body.rating;
  var reviews = req.body.reviews;
  var size = req.body.size;
  var installs = req.body.installs;
  var type = req.body.type;
  var price = req.body.price;
  var content_rating = req.body.content_rating;
  var genres = req.body.genres;
  var last_updated = req.body.last_updated;
  var current_ver = req.body.current_ver;
  var android_ver = req.body.android_ver;
  

  // Set our collection
  var collection = db.get('playstore');

  // Submit to the DB
  collection.update({
      "_id": sno
  },
  {
    $set: {
      "App Name" : app,
      "Category" : category,
      "Rating" : rating,
      "Reviews" : reviews,
      "Size" : size,
      "Installs" : installs,
      "Type" : type,
	  "Price": price,
	  "Content Rating": content_rating,
	  "Genres": genres,
	  "Last Updated": last_updated,
	  "Current Version": current_ver,
	  "Android Version": android_ver
  }
  },
  function (err, doc) {
      if (err) {
          // If it failed, return error
          res.send("There was a problem updating the information into the database.");
      }
      else {
          // And forward to success page
          res.redirect("/update");
      }
  });

});

module.exports = router;
