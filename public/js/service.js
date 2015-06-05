function jsonService($http) {
    $http.get('rest/todo.json').then();
    //return array to controller and than to "todoListController" in html
    return {readList: function() {
            }, addNewTask: function(newTask) {
                
                                   
            }, deleteTask: function(deleteTaskNumber) {
                
                
            }, editTask: function(editTaskNumber) {
                
                
            }, saveTask: function(saveTaskNumber) {
                
                                
            }
    };
};