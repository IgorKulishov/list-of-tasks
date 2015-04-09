angular.module('listOfTasks', [])
    .controller("addAndReadTasks", function(addressJson) {
        this.taskListArray = [];
        this.number = 0;
        this.priority = 1;
        this.type = "boolean";
        //'booleanProgress' only for boolean type;
        this.booleanProgress;
        this.booleanMessage = " ";     
        this.percentageMessage = 0;     
        this.numDelete;
        this.numSave;
        
        this.editCommand;
        
//function to add new Task 
        this.submit = function() {            
            
            this.editCommand = -1;
            if (this.name == null) {
                this.name = "";   
            }
            this.taskListArray.push({
                number: ++this.number, name: this.name, priority: this.priority, 
                type: this.type, booleanProgress: false, booleanMessage: this.booleanMessage,
                percentageMessage: this.percentageMessage, editCommand: this.editCommand, numberOfCheckMarks: 0
            });
            addressJson.copyTaskListArray = this.taskListArray;
            
            delete this.name;
            
        };
//to delete a task from the list 
  // (HOW IT WORKS: HTML sends to 'this.delete' function 'numDelete' which is equel to 'this.number' which is a unique number of an element in array (given at creation). Looping through 'this.taskListArray' array we will find the position of the number we need to delete.)

        this.delete = function() {
           //alert(this.numDelete); 
           for (var i = 0; i < this.taskListArray.length; i++)
                if (this.taskListArray[i].number === this.numDelete) {
                    this.taskListArray.splice((i), 1);
            }
        };
//this function is to edit Tasks
        this.edit = function() {
            this.taskListArray[this.numEdit].editCommand = 1;            
        };  
//this function is to Save an edited Task
        this.save = function() {
            if ((this.taskListArray[this.numSave].editCommand === 1) && 
            (this.taskListArray[this.numSave].type === 'boolean')) {
                    this.taskListArray[this.numSave].editCommand = -1;
                
            } else if ((this.taskListArray[this.numSave].editCommand === 1) && 
                (this.taskListArray[this.numSave].type === 'percentage')) {
                    this.taskListArray[this.numSave].percentageMessage = this.percentage;
                    this.taskListArray[this.numSave].editCommand = -1;
            } else {
                alert("Please click 'Edit' button first");
            }
        };     
    
//to indicate Progress of a Boolean in a Task when clicked [v] button in user's menu to change Progress of a Task
            
        this.click = function() {       
                
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
    })
//factory keeps a copy of JSON and is used in the controller "infoProgress" to change Progress in taskListArray when [v] clicked in user menu 
    .factory("addressJson", function() {
        return copyTaskListArray = [];
    });
