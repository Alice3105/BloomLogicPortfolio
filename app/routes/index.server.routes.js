var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home | Bloom Logic Development' });
});

router.get('/aboutme', function(req, res, next){
  res.render('aboutme',{ title: 'About Me | Bloom Logic Development'});
});

router.get('/contactme', function(req, res, next){
  res.render('contactme',{ title: 'Contact Me | Bloom Logic Development'});
});

router.get('/projects', function(req, res, next){
  res.render('projects', {title: 'Projects | Bloom Logic Development'});
});

router.get('/services', function(req, res, next){
  res.render('services', {title: 'Services | Bloom Logic Development'});
});

module.exports = router;