angular.module('listOfTasks', [])
    .controller("addAndReadTasks", [function() {
        this.taskListArray = [];        
        this.priority = 1;
        this.type = "boolean";
        //'booleanProgress' only for boolean type;
        this.booleanProgress;
        this.percentageMessage = 0;             
        
        //function to add new Task 
        this.submit = function() {            
            this.editCommand = -1;
            if (this.name === null) {
                this.name = "";   
            }
            this.ID = this.taskListArray.length + 1;
            //presentation object
            this.todoRecord = {
                ID: this.ID, name: this.name, priority: this.priority, 
                type: this.type, booleanProgress: false, 
                percentageMessage: this.percentageMessage, editCommand: this.editCommand, numberOfCheckMarks: 0
            };            
            this.taskListArray.push(this.todoRecord);            
            delete this.name;            
        };
      
        //to delete a task from the list 
        // HOW IT WORKS: HTML sends to 'this.delete' function 'numDelete' which is equel to 'this.ID' (the ID number of a Task in array).
        this.delete = function() {        
            this.taskListArray.splice((this.numDelete - 1), 1);
            
        // rearange and reassign integer ID numbers of Tasks after deletetion a Task (IDs are in order 1,2,3.. without any gaps)
            var n = this.taskListArray.length;
            for (var j = 0; j < n; j++) {
                this.taskListArray[j].ID = j + 1;             
            }          
        };
//this function is to edit a Task
        this.edit = function() {
            this.taskListArray[this.numEdit-1].editCommand = 1;            
        };  
//this function is to Save edited Task
        this.save = function() {
            if ((this.taskListArray[this.numSave-1].editCommand === 1) && 
            (this.taskListArray[this.numSave-1].type === 'boolean')) {
                this.taskListArray[this.numSave-1].editCommand = -1;                
            
            } else if ((this.taskListArray[this.numSave-1].editCommand === 1) && 
            (this.taskListArray[this.numSave-1].type === 'percentage')) {
                this.taskListArray[this.numSave-1].percentageMessage = this.percentage;
                this.taskListArray[this.numSave-1].editCommand = -1;
            } else {
                alert("Please click 'Edit' button first");
            }
        };     
    
//to indicate Progress of a Boolean in a Task when clicked [v] button in user's menu to change Progress of a Task            
        this.booleanCheck = function() {       
                
       //can save info about check mark from UI if needed;
                   
        }; 
    }]);