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
                return $q(function(resolve, reject) {
                    $http.delete('/rest/todo/' + deleteTaskNumber).then(
                        function(response) {
                            resolve(response.data);
                        }
                    );
                });
            }, 
            saveTask: function(saveTaskNumber, saveTaskInfo) {
                $http.put('/rest/todo/' + saveTaskNumber, saveTaskInfo);
            }
        };
    }]);