var express = require('express');
var router = express.Router();

// Define initial view count variable
let viewCount = 0;

/* GET home page. */
router.get('/', function(req, res, next) {
  viewCount += 1;
  res.render('index', { viewCount});
});

module.exports = router;
