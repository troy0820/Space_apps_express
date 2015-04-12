var express = require('express');
var router = express.Router();
var request = require('request');
var _ = require('lodash');

/* GET home page. */
router.get('/', function(req, res) {
  var url = "https://data.oregon.gov/api/views/7zxm-9fbf/rows.json";
  request.get(url, function(err,response,body) {
    if(err) {
      console.log(err);
    }
    var cols = JSON.parse(body).meta.view.columns;
    var columns = _.pluck(cols, 'name');
    var data = JSON.parse(body).data;
    var tags = JSON.parse(body).meta.view.tags;
    res.render('index', { columns: columns, title:'Open Data', data:data,tags:tags });
  })

});

module.exports = router;
