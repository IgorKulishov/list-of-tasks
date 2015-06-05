function jsonService($http) {
    //return array to controller and than to "todoListController" in html
    return {readList: function() {
                var param = {
                    method: 'GET',
                    url: '/rest/todo'
                }
                return $http(param);
            }, addNewTask: function(newTask) {
                                 
            }, deleteTask: function(deleteTaskNumber) {
                
            }, editTask: function(editTaskNumber) {
                
            }, saveTask: function(saveTaskNumber) {
                                
            }
    };
};