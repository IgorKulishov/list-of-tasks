function jsonService($http) {
    //array of tasks in service 
    var list = [];
    $http.get('rest/todo.json').then(function(response) {
        list = response.data;
    });
    //return array to controller and than to "todoListController" in html
    return {readList: function() {
            return list;                
            }, addNewTask: function(newTask) {
                list.push(newTask);                    
            }, deleteTask: function(deleteTaskNumber) {
                for (var i = 0; i < list.length; i++) {
                    if (list[i].id === deleteTaskNumber)
                        list.splice(i, 1);
                }
            }, editTask: function(editTaskNumber) {
                for (var i = 0; i < list.length; i++) {
                    if (list[i].id === editTaskNumber)
                        list[i].isEditing = true; 
                }
            }, saveTask: function(saveTaskNumber) {
                for (var i = 0; i < list.length; i++) {
                    if (list[i].id === saveTaskNumber)
                        list[i].isEditing = false; 
                }                
            }, changeProgressInfo: function(changeTaskNumber) {
                //jreserved function to track clicks
                
            }
    };
};
angular.module('listOfTasks', [])
    .controller("todoListController", function(jsonService) {
        var idGenerator = 1;
        //this.taskListArray = [];  <-moved array of tasks to service
        // presentation objects stay in the controller
        var self = this;        
        var init = function() {
            self.newTask = {};
            self.newTask.name = "";
            self.newTask.priority = 1;
            self.newTask.type = "boolean";
            self.booleanProgress = false;
            self.newTask.percentageMessage = 0;
            self.newTask.isEditing = false;
        }
        init();

        //function to read 'list' array of tasks from service
        this.taskListArray = function() {
            return jsonService.readList();
        }

        //function to add new Task 
        this.addTask = function(taskToAdd) {            
            jsonService.addNewTask({                
                id: idGenerator++, name: taskToAdd.name, priority: taskToAdd.priority, 
                type: taskToAdd.type, percentageMessage: taskToAdd.percentageMessage,
                isEditing: taskToAdd.isEditing
            });            
            init();        
        };
        //function to delete a task
        this.delete = function(id) {                    
            return jsonService.deleteTask(id);
        };
        //this function is to edit a Task
        this.edit = function(id) {            
            return jsonService.editTask(id);            
        };
        //this function is to Save edited Task
        this.save = function(id) {
            return jsonService.saveTask(id);
        };
        //to indicate Progress of a Boolean in a Task when clicked [v] button in user's menu to change Progress of a Task            
        this.booleanCheck = function(id) {
            return jsonService.changeProgressInfo(id);
        };
})
.service("jsonService", ['$http', jsonService]);
