var express = require('express'),
    fs = require('fs'),
    util = require('util'),
    bodyParser = require('body-parser'),
    app = express(); 
    var idGenerator = 0;
    var todoData;

var app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
// to support URL-encoded bodies
app.use(bodyParser.urlencoded({     
  extended: true
})); 

todoData = [
  {
    "id":1,
    "name":"Task 1",
    "priority":1,
    "type":"boolean",
    "booleanProgress":true,
    "percentageMessage":0,
    "isEditing":false
  },
  {
    "id":2,
    "name":"Task 2",
    "priority":1,
    "type":"boolean",
    "booleanProgress":true,
    "percentageMessage":0,
    "isEditing":false
  },
  {
    "id":3,
    "name":"Task 3",
    "priority":1,
    "type":"boolean",
    "booleanProgress":true,
    "percentageMessage":0,
    "isEditing":false
  }
];

app.get('/rest/todo', function(req, res, next) {
    //res.send([{"id":0,"name":"first task","priority":1,"type":"boolean","booleanProgress":false,"percentageMessage":0,"isEditing":false},{"id":1,"name":"test last last","priority":"2","type":"boolean","booleanProgress":false,"percentageMessage":0,"isEditing":false},{"id":1,"name":"test last last","priority":"2","type":"boolean","booleanProgress":false,"percentageMessage":0,"isEditing":false}]);
    console.log(todoData);
    res.send(todoData);           
    
});


app.use(function(req, res){
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

app.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});

app.listen(app.get('port'), function() {
    console.log("express is running on URL http://localhost:"+app.get('port')+"/");
});

