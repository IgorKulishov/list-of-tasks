var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//to assign id to new task;
var idGenerator = null;    
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

app.use(bodyParser.json());

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
    var responseById;
    //this data will be sent back if no 'id' found
    var defaultErrorMessage = {
    "id":null,
    "name":"there is no such task",
    "priority":null,
    "type":"boolean",
    "booleanProgress":true,
    "percentageMessage":0,
    "isEditing":false
  };
    //by default responseById = defaultErrorMessage
    responseById = defaultErrorMessage;
    var parseRequestedId = parseInt(req.params.id);
    for (var i = 0; i < todoData.length; i++) {
        if (todoData[i].id === parseRequestedId) {
            responseById = todoData[i];
            break;                    
        } 
    }
    console.log(responseById);
    res.send(responseById);    
});

app.post('/rest/todo', function(req, res, next) {
    var newTask = req.body;    
    idGenerator = todoData[(todoData.length - 1)].id + 1;
    newTask.id = idGenerator;
    todoData.push(newTask);
    console.log(todoData);
    res.send(todoData);
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
    console.log("express is running on URL http://localhost:" + app.get('port') + "/");
});