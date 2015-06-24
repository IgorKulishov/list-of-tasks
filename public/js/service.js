angular.module('listOfTasks')
    .service('dataService', ['$http', '$q', function ($http, $q) {
        //return array to controller and than to "todoListController" in html
        return {
            readList: function() {
                return $q(function(resolve, reject) {
                    $http.get('/rest/todo').then(
                        function(response) {
                            resolve(response.data);
                        }
                    );
                });
            },
            addNewTask: function(newTask) {
                return $q(function(resolve, reject) {
                    $http.post('/rest/todo', newTask).then(
                        function(response) {
                            resolve(response.data);
                        }
                    );
                });
            }, 
            deleteTask: function(deleteTaskNumber) {
                $http('/rest/todo/' + deleteTaskNumber);
            }, 
            editTask: function(editTaskNumber) {
                
            }, 
            saveTask: function(saveTaskNumber) {
                                
            }
        };
    }]);