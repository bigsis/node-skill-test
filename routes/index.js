var express = require('express');
var router = express.Router();
var git = require('../models/git');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/follower', function(req, res, next) {

  git.getFollower(req.query.user, res);

});

module.exports = router;
