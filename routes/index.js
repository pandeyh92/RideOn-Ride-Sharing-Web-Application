var express = require('express');
var router = express.Router();

/*Get Index page */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'home' });
});
/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'index' });
});
/* GET About page */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Us' });
});

/*Get Contact  page */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Us' });
});

/*Get Testimonials page */
router.get('/testimonials', function(req, res, next) {
  res.render('testimonials', { title: 'Testimonials' });
});


/*Get Testimonials page */
router.get('/team', function(req, res, next) {
  res.render('team', { title: 'Team' });
});


router.get('/sample', function(req, res, next) {
  res.render('sample', { title: 'sample' });
});


module.exports = router;
