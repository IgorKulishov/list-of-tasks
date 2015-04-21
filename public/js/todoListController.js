angular.module('listOfTasks', [])
    .controller("todoListController", [function() {
        var idGenerator = 1;
        this.taskListArray = [];
        var self = this;        
        var init = function() {
            self.newTask = {};
            self.newTask.name = "";
            self.newTask.priority = 1;
            self.newTask.type = "boolean";
            self.booleanProgress = false;
            self.newTask.percentageMessage = 0;
        }
        init();
        //function to add new Task 
        this.addTask = function(taskToAdd) {            
            var todoRecord = {
                id: idGenerator++,
                name: taskToAdd.name,
                priority: parseInt(taskToAdd.priority),
                type: taskToAdd.type,                            
                percentageMessage: taskToAdd.percentageMessage,
                isEditing: false
            };
            self.taskListArray.push(todoRecord);            
            init();
        };
        this.delete = function(id) {            
            for(var i = 0; i < self.taskListArray.length; i++) {
                if(self.taskListArray[i].id === id) {
                    self.taskListArray.splice(i, 1);
                    break;
                }
            }
        };
        //this function is to edit a Task
        this.edit = function(id) {
            //this.taskListArray[this.numEdit-1].editCommand = 1;
            for(var i = 0; i < self.taskListArray.length; i++) {
                if(self.taskListArray[i].id === id) {
                    this.taskListArray[i].isEditing = true;
                    break;
                }
            }
        };
        //this function is to Save edited Task
        this.save = function(id) {
            for(var i = 0; i < self.taskListArray.length; i++) {
                if(self.taskListArray[i].id === id) {
                    this.taskListArray[i].isEditing = false;
                    break;
                }
            }
        };
        //to indicate Progress of a Boolean in a Task when clicked [v] button in user's menu to change Progress of a Task            
        this.booleanCheck = function() {
        //can save info about check mark from UI if needed;
        };
}]);

