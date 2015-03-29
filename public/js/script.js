angular.module('listTask', [])
.controller("ListController", function(addressJson) {
    this.array = [];
    this.number = 1;
    this.name = "New task..";
    this.priority = 1;
    this.type = "read&study";
    this.progress = false;
    this.message = "  Click to start the task ";
    
//to add new Task
    this.save = function() {
        
        this.array.push({number: this.number, name: this.name, priority: this.priority, 
            type: this.type, progress: this.progress, message: this.message});
        addressJson.backup = this.array;
        this.number += 1;
    };

})
//to indicate Progress in a Task when clicked
.controller("infoProgress", function(addressJson) {
    var n = 0;
    this.number = 0;
    this.click = function() {
        if ((this.progress == true) && (n == 0)) { 
            addressJson.backup[(this.number - 1)].message = "  started " + this.number;
            n += 1;
        }

        if ((this.progress == false) && (n == 1)) { 
            addressJson.backup[(this.number - 1)].message = "  postponed " + this.number;
            n += 1; 
        }

        if ((this.progress == true) && (n == 2)) { 
            addressJson.backup[(this.number - 1)].message = "  closed " + this.number;
            n += 1;
        }

        if ((this.progress == false) && (n==3)) { 
            addressJson.backup[(this.number - 1)].message = "  Click to start the task " + this.number;
            n += 1;
        }             
            
        if (n == 4) {
            n = 0;
        }
      
    };
})
//service keeps copy of JSON
.factory("addressJson", function() {
    return backup = [];
});
