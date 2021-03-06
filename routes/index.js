var express = require('express');
var router = express.Router();
var request = require('request');
var _ = require('lodash');
var buttons = [];

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
    var title = JSON.parse(body).meta.view.name;
    res.render('index', { columns: columns, title:title, data:data,tags:tags });
   })

});

router.post('/',function(req,res) { 
	var button = req.body.val;
	if(buttons) {
	  buttons.push(button);
  	  var num = buttons.length;
	  res.send(buttons[num-1]);
  	}
});

module.exports = router;
