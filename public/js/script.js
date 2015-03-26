angular.module('listTask', [])
.controller("ListController", function() {
    this.array = [];
    this.number = 1;
    this.name = "New task..";
    this.priority = 1;
    this.type = "read&study";
    this.status;
    this.status_print = "not started";
    
    this.save = function() {
        
        this.array.push({number: this.number, name: this.name, priority: this.priority, type: this.type, status: this.status});
        this.number += 1;
    };

})
.controller("StatusController", function() {
    this.status_info = "not started";
    this.status_changed = function() {
        if (this.status == true) {
            this.status_info = "started";
        } 

        if (this.status == false) {
            this.status_info = "not started";
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
.factory("testService", function() {
    
        return {
            checked : function() {
                alert('checked');
            },
            unchecked : function() {
                alert('unchecked');
            },
        
        }

            /*,
          unchecked: function() {
                alert('unchecked');
            }
        }   */
});
