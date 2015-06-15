var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//to assign id to new task;
var idGenerator = 0;    
//initial list of tasks
var todoData = [
  {
    "id":1,
    "name":"Task 1",
    "priority":1,
    "type":"boolean",
    "booleanProgress":true,
    "percentageMessage":0
  },
  {
    "id":2,
    "name":"Task two",
    "priority":1,
    "type":"boolean",
    "booleanProgress":true,
    "percentageMessage":0
  },
  {
    "id":3,
    "name":"Task 3",
    "priority":1,
    "type":"boolean",
    "booleanProgress":true,
    "percentageMessage":0
  }
];
    //this data will be sent back if no 'id' found
var defaultErrorMessage = {
    "id":null,
    "name":"there is no such task",
    "priority":null,
    "type":"boolean",
    "booleanProgress":true,
    "percentageMessage":0
};

app.use(bodyParser.json());

//path to html and assigning
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));

//get respond sends list of all tasks to a client
app.get('/rest/todo', function(req, res, next) {
    res.status(200);
    console.log(todoData);
    res.send(todoData);            
});
//get respond by 'id'
app.get('/rest/todo/:id', function(req, res, next) {
    var responseById;
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
//adding a new task
app.post('/rest/todo', function(req, res, next) {
    var newTask = req.body;
    idGenerator = todoData[(todoData.length - 1)].id + 1;
    newTask.id = idGenerator;
    todoData.push(newTask);
    console.log(todoData[(todoData.length - 1)]);
    res.send(todoData[(todoData.length - 1)]);
});
//editing existing task
app.put('/rest/todo/:id', function(req, res, next) {
    var updateTask = req.body;
    var idOfRequest = req.body.id;
    //by default there is no such task with the 'id'
    var updateResponse = defaultErrorMessage;
    var requestedId = parseInt(req.params.id);
    for (var i = 0; i < todoData.length; i++) {
        if (todoData[i].id === requestedId) {
            todoData[i] = updateTask;
            updateResponse = updateTask;
            break;
        }
    }
    console.log(updateResponse);
    res.send(updateResponse); 
});
//delete an existing record
app.delete('/rest/todo/:id', function(req, res, next) {
    var deleteTaskId = parseInt(req.params.id);
    for (var i = 0; i < todoData.length; i++) {
        if (todoData[i].id === deleteTaskId)
            todoData.splice(i, 1);
    }
    console.log("Task with ID = " + deleteTaskId + " is deleted");
     res.send({"id" : deleteTaskId}); 
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
