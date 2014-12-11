var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  var data_code = fs.readFileSync('app.js', "utf-8");

  //   , function (err, data) {
  //   if (err) {
  //     return err;
  //   }
  //   //console.log(data);
  //   // res.send(data);
  //   // data_code = data;
    
  //   // res.render('index', { 
  //   //   title: 'Cosine Similarity Measure',
  //   //   dataCode: data
  //   // });

  //   res.use(function(req, res, next){
  //     res.locals.dataCode = req.data;
  //     next();
  //   });
  // });

  res.render('index', { 
    title: 'Cosine Similarity Measure',
    dataCode: data_code
  });

});

module.exports = router;
