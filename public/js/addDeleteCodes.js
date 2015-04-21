angular.module('listOfTasks', [])
    .controller("todoListController", [function() {
        var idGenerator = 1;
        this.taskListArray = [];
        //this.priority = 1;
        //this.type = "boolean";
        //'booleanProgress' only for boolean type;
        //this.booleanProgress;
        //this.percentageMessage = 0;
        var self = this;
        //the init() function can be just var
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
            self.editCommand = -1;
            //we do not need the expression
            /*if (self.name === null) {
                self.name = "";
            }*/

            // this.ID = this.taskListArray.length + 1; // <-- you do not need ID before (business) object is created
            //presentation object
            // <-- this.newTask: presentation object
            // <-- todoRecord: business object
            var todoRecord = { // <-- what the point of saving new record inside of controller ? limit scope !
                id: idGenerator++,
                name: taskToAdd.name,
                priority: parseInt(taskToAdd.priority),
                type: taskToAdd.type,
                booleanProgress: false,
                //it work before just fine but i added the link
                //percentageMessage: 0,
                percentageMessage: taskToAdd.percentageMessage,
                isEditing: false
            };
            self.taskListArray.push(todoRecord);
            // delete this.name; // <-- not a good solution
            init();
        };

        //to delete a task from the list 
        // HOW IT WORKS: HTML sends to 'this.delete' function 'numDelete' which is equel to 'this.ID' (the ID number of a Task in array).
        this.delete = function(id) {
            // <-- we rely on id, not on order or index in array
            // self.taskListArray.splice((this.numDelete - 1), 1);
            for(var i = 0; i < self.taskListArray.length; i++) {
                if(self.taskListArray[i].id === id) {
                    self.taskListArray.splice(i, 1);
                    break;
                }
            }
            // <-- don't do it !
            // rearange and reassign integer ID numbers of Tasks after deletetion a Task (IDs are in order 1,2,3.. without any gaps)
            //    var n = this.taskListArray.length;
            //    for (var j = 0; j < n; j++) {
            //        this.taskListArray[j].ID = j + 1;
            //    }
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
            //if ((this.taskListArray[this.numSave-1].editCommand === 1) &&
            //(this.taskListArray[this.numSave-1].type === 'boolean')) {
            //    this.taskListArray[this.numSave-1].editCommand = -1;
            //
            //} else if ((this.taskListArray[this.numSave-1].editCommand === 1) &&
            //(this.taskListArray[this.numSave-1].type === 'percentage')) {
            //    this.taskListArray[this.numSave-1].percentageMessage = this.percentage;
            //    this.taskListArray[this.numSave-1].editCommand = -1;
            //} else {
            //    alert("Please click 'Edit' button first");
            //}
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
