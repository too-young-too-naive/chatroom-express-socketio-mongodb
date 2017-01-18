var express = require('express');
var router = express.Router();
// var app=express();
// var http = require('http').Server(app);

// http.listen(3000, function(){
//   console.log('listening on *:3000');
// });
////////////////////////////////

////////////////////////////////////////////////

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index.ejs');
});







module.exports = router;
