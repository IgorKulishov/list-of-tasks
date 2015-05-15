var express = require('express'),
    app = express();
    
//initial list of tasks
var todoData = [
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
//path to html and assigning
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));

//send list of tasks to a client
app.get('/rest/todo', function(req, res, next) {
    console.log(todoData);
    res.send(todoData);            
});
//respond by 'id'
app.get('/rest/todo/:id', function(req, res, next) {
    for (var i = 0; i < todoData.length; i++) {
        if (todoData[i].id === parseInt(req.params.id)) {
            console.log(todoData[i]);
            res.send(todoData[i]);  
            break;            
        }
    }                   
});
//if not found
app.use(function(req, res) {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});
//if server error
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});

app.listen(app.get('port'), function() {
    console.log("express is running on URL http://localhost:"+app.get('port')+"/");
});