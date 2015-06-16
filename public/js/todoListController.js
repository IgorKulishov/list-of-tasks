angular.module('listOfTasks', [])
    .controller("todoListController", ['dataService', function(dataService) {
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
        var taskListArrayRead = function() {
                dataService.readList().then(function(data) {
                    self.taskListArray = data;
                },
                function(errResponse) {                    
                    alert(' Error while fetching, status : ' + errResponse.status);                }
            );
        };
        taskListArrayRead();

        //function to add new Task 
        this.addTask = function(taskToAdd) {
            dataService.addNewTask({
                id: idGenerator++, name: taskToAdd.name, priority: taskToAdd.priority, 
                type: taskToAdd.type, percentageMessage: taskToAdd.percentageMessage,
                isEditing: taskToAdd.isEditing
            });
            init();
        };
        //function to delete a task
        this.delete = function(id) {
            return dataService.deleteTask(id);
        };
        //this function is to edit a Task
        this.edit = function(id) {
            return dataService.editTask(id);
        };
        //this function is to Save edited Task
        this.save = function(id) {
            return dataService.saveTask(id);
        };
        //to indicate Progress of a Boolean in a Task when clicked [v] button in user's menu to change Progress of a Task            
        this.booleanCheck = function(id) {
            return dataService.changeProgressInfo(id);
        };
}]);