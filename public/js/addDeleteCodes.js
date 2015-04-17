angular.module('listOfTasks', [])
    .controller("addAndReadTasks", [function() {
        this.taskListArray = [];        
        this.priority = 1;
        this.type = "boolean";
        //'booleanProgress' only for boolean type;
        this.booleanProgress;
        this.booleanMessage = " ";     
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
                type: this.type, booleanProgress: false, booleanMessage: this.booleanMessage,
                percentageMessage: this.percentageMessage, editCommand: this.editCommand, numberOfCheckMarks: 0
            };            
            this.taskListArray.push(this.todoRecord);            
            delete this.name;            
        };
      
        //to delete a task from the list 
        // (HOW IT WORKS: HTML sends to 'this.delete' function 'numDelete' which is equel to 'this.ID' which is a unique number of an element in array (given at creation). Looping through 'this.taskListArray' array we will find the position of the ID we need to delete.)
        this.delete = function() {        
            this.taskListArray.splice((this.numDelete - 1), 1);
            
        // rearange ID numbers after deletetion (reassign new IDs)
            var n = this.taskListArray.length;
            for (var j = 0; j < n; j++) {
                this.taskListArray[j].ID = j + 1;             
            }          
        };
//this function is to edit Tasks
        this.edit = function() {
            this.taskListArray[this.numEdit-1].editCommand = 1;            
        };  
//this function is to Save an edited Task
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
                
            if ((this.taskListArray[(this.changeNumber - 1)].booleanProgress === true) && (this.taskListArray[(this.changeNumber - 1)].numberOfCheckMarks === 0)) { 
                this.taskListArray[(this.changeNumber - 1)].booleanMessage = "  started ";
                this.taskListArray[(this.changeNumber - 1)].numberOfCheckMarks = 1;                           
            }
            if ((this.taskListArray[(this.changeNumber - 1)].booleanProgress === false) && (this.taskListArray[(this.changeNumber - 1)].numberOfCheckMarks === 1))  { 
                this.taskListArray[(this.changeNumber - 1)].booleanMessage = "  postponed ";
                this.taskListArray[(this.changeNumber - 1)].numberOfCheckMarks = 2;               
              //  this.taskListArray[(this.changeNumber - 1)].progress = false;
            } 

            if ((this.taskListArray[(this.changeNumber - 1)].booleanProgress === true) && (this.taskListArray[(this.changeNumber - 1)].numberOfCheckMarks === 2)) { 
                 this.taskListArray[(this.changeNumber - 1)].booleanMessage = "  closed ";
                 this.taskListArray[(this.changeNumber - 1)].numberOfCheckMarks = 3;
            }
            if ((this.taskListArray[(this.changeNumber - 1)].booleanProgress === false) && (this.taskListArray[(this.changeNumber - 1)].numberOfCheckMarks === 3)) { 
                this.taskListArray[(this.changeNumber - 1)].booleanMessage = "  Click to start the task ";
                this.taskListArray[(this.changeNumber - 1)].numberOfCheckMarks = 0;
            }
                   
        }; 
    }]);