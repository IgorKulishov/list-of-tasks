angular.module('listOfTasks', [])
    .controller("addAndReadTasks", function(addressJson) {
        this.array = [];
        this.number = 1;
        this.priority = 1;
        this.type = "boolean";
        this.progress = false;
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
            this.array.push({
                number: this.number, name: this.name, priority: this.priority, 
                type: this.type, progress: this.progress, progressMessage: this.progressMessage,
                editCommand: this.editCommand
            });
            addressJson.backup = this.array;
            this.number += 1;
            delete this.name;
        };
//to delete a task from the list
        this.delete = function() {
            this.array.splice(this.numDelete, 1);
        };
//this function is to edit Tasks
        this.edit = function() {
            this.array[this.numEdit].progressMessage = " Edited..";
            this.array[this.numEdit].editCommand = 1;            
        };  
//this function is to Save an edited Task
        this.save = function() {
            if (this.array[this.numSave].editCommand === 1) {
                this.array[this.numSave].progressMessage = " Saved..";
                this.array[this.numSave].editCommand = -1;
                alert("name: " + this.array[this.numSave].name + " priority: " + this.array[this.numSave].priority);
            } else {
                alert("Please click 'Edit' button first");
            }
        };     
    })
//to indicate Progress in a Task when clicked [v] button in user's menu to change Progress of a Task
    .controller("infoProgress", function(addressJson) {
        var n = 0;
        this.number = 0;
        this.click = function() {
            if ((this.progress === true) && (n === 0)) { 
                addressJson.backup[(this.number - 1)].progressMessage = "  started " + this.number;
                n += 1;
            }
            if ((this.progress === false) && (n === 1)) { 
                addressJson.backup[(this.number - 1)].progressMessage = "  postponed " + this.number;
                n += 1; 
            }
            if ((this.progress === true) && (n === 2)) { 
                addressJson.backup[(this.number - 1)].progressMessage = "  closed " + this.number;
                n += 1;
            }
            if ((this.progress === false) && (n===3)) { 
                addressJson.backup[(this.number - 1)].progressMessage = "  Click to start the task " + this.number;
                n += 1;
            }                
            if (n === 4) {
                n = 0;
            }          
        }; 
    })
//factory keeps a copy of JSON and is used in the controller "infoProgress" to change Progress in array when [v] clicked in user menu 
    .factory("addressJson", function() {
        return backup = [];
    });
