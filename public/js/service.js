function jsonService($http) {
    //array of tasks in service 
    var list = [];
    $http.get('rest/todo.json').then(function(response) {
        list = response.data;
    });
    //return array to controller and than to "todoListController" in html
    return {readList: function() {
            return list;                
            }, addNewTask: function(newTask) {
                list.push(newTask);                    
            }, deleteTask: function(deleteTaskNumber) {
                for (var i = 0; i < list.length; i++) {
                    if (list[i].id === deleteTaskNumber)
                        list.splice(i, 1);
                }
            }, editTask: function(editTaskNumber) {
                for (var i = 0; i < list.length; i++) {
                    if (list[i].id === editTaskNumber)
                        list[i].isEditing = true; 
                }
            }, saveTask: function(saveTaskNumber) {
                for (var i = 0; i < list.length; i++) {
                    if (list[i].id === saveTaskNumber)
                        list[i].isEditing = false; 
                }                
            }, changeProgressInfo: function(changeTaskNumber) {
                //jreserved function to track clicks
                
            }
    };
};