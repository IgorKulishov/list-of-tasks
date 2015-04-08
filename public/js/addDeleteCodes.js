angular.module('listOfTasks', [])
    .controller("addAndReadTasks", function(addressJson) {
        this.taskListArray = [];
        this.number = 1;
        this.priority = 1;
        this.type = "boolean";

        this.progressMessage = "  Click to start the task ";        
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
                number: this.number, name: this.name, priority: this.priority, 
                type: this.type, progress: false, progressMessage: this.progressMessage,
                editCommand: this.editCommand, numberOfCheckMarks: 0
            });
            addressJson.copyTaskListArray = this.taskListArray;
            this.number += 1;
            delete this.name;
        };
//to delete a task from the list
        this.delete = function() {
            this.taskListArray.splice(this.numDelete, 1);
        };
//this function is to edit Tasks
        this.edit = function() {
            this.taskListArray[this.numEdit].progressMessage = " Edited..";
            this.taskListArray[this.numEdit].editCommand = 1;            
        };  
//this function is to Save an edited Task
        this.save = function() {
            if (this.taskListArray[this.numSave].editCommand === 1) {
                this.taskListArray[this.numSave].progressMessage = " Saved..";
                this.taskListArray[this.numSave].editCommand = -1;
                
            } else {
                alert("Please click 'Edit' button first");
            }
        };     
    
//to indicate Progress in a Task when clicked [v] button in user's menu to change Progress of a Task
            
        this.click = function() {       

            
            if (this.taskListArray[(this.changeNumber - 1)].numberOfCheckMarks === 0) { 
                this.taskListArray[(this.changeNumber - 1)].progressMessage = "  started " + this.changeNumber;
                this.taskListArray[(this.changeNumber - 1)].numberOfCheckMarks = 1;
                //this.taskListArray[(this.changeNumber - 1)].progress = true;
            }

            if (this.taskListArray[(this.changeNumber - 1)].numberOfCheckMarks === 1)  { 
                this.taskListArray[(this.changeNumber - 1)].progressMessage = "  postponed " + this.changeNumber;
                this.taskListArray[(this.changeNumber - 1)].numberOfCheckMarks = 2; 
                //this.taskListArray[(this.changeNumber - 1)].progress = false;
            } 
/*
            if ((this.progress === true) && (n === 2)) { 
                addressJson.copyTaskListArray[(this.number - 1)].progressMessage = "  closed " + this.number;
                n += 1;
            }

            if ((this.progress === false) && (n===3)) { 
                addressJson.copyTaskListArray[(this.number - 1)].progressMessage = "  Click to start the task " + this.number;
                n += 1;
            }

            if (n === 4) {
                n = 0;
            } */
        }; 
    })
//factory keeps a copy of JSON and is used in the controller "infoProgress" to change Progress in taskListArray when [v] clicked in user menu 
    .factory("addressJson", function() {
        return copyTaskListArray = [];
    });
