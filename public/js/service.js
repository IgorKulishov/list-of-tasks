angular.module('serviceHtml', [])
    .service("jsonService", ['$http', '$q', function ($http, $q) {
        //return array to controller and than to "todoListController" in html
        return {
            readList: function() {
                var deferred = $q.defer();
                return $http.get('/rest/todo').then(
                    function(response) {
                        deferred.resolve(response.data);
                        return deferred.promise;
                    },
                    function(error) {
                        deferred.reject(response.data);
                        return deferred.promise;
                    }
                );
                  
            }, 
            addNewTask: function(newTask) {
                                 
            }, 
            deleteTask: function(deleteTaskNumber) {
                
            }, 
            editTask: function(editTaskNumber) {
                
            }, 
            saveTask: function(saveTaskNumber) {
                                
            }
        };
    }]);