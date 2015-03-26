angular.module('listTask', [])
.controller("ListController", function(addressJson) {
    this.array = [];
    this.number = 1;
    this.name = "New task..";
    this.priority = 1;
    this.type = "read&study";
    this.progress;
    this.progress_print = "not started";
    
    this.save = function() {
        
        this.array.push({number: this.number, name: this.name, priority: this.priority, type: this.type, progress: this.progress});
        addressJson.data = this.array;
        this.number += 1;
    };

})
.controller("ProgressController", function() {
    this.progress_info = "not started";
    this.progress_changed = function() {
        if (this.progress == true) {
            this.progress_info = "started";
        } 

        if (this.progress == false) {
            this.progress_info = "not started";
        }
    };
})
.controller("EditController", function(testService) {
    this.edit = function() {
        
        if (this.check == true) {
            testService.checked();
        }
        
        if (this.check == false) {
            testService.unchecked();
        }
    };
})
.factory("testService", function(addressJson) {
    
        return {
            checked : function() {
                var message;
                for (var i = 0; i < addressJson.data.length; i++) {
//need to pass 
                    if (addressJson.data[i].progress != true) {
                        message = 'progress of ' + alert('checked: ' + addressJson.data[i].name + ' was changed');
                    
                        alert('checked: ' + message);
                    }
                }

                
            },
            unchecked : function() {
                alert('unchecked');
            },
        
        }
})
.factory("addressJson", function() {
    return data = [];
});
