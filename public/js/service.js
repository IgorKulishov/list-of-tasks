angular.module('serviceHtml', [])
    .service("jsonService", ['$http', '$q', function ($http, $q) {
        //return array to controller and than to "todoListController" in html
        return {readList: function() {
                    var deferred = $q.defer();
                    return $http.get('/rest/todo').then(function(data) {                        
                        deferred.notify('delivered');
                        if (data) {
                            deferred.resolve(data);                        
                        } else {
                            deferred.reject($q.reject(data));
                        }
                        return deferred.promise;
                    }, function(err) {console.log(err)}
                    );
                }, addNewTask: function(newTask) {
                                     
                }, deleteTask: function(deleteTaskNumber) {
                    
                }, editTask: function(editTaskNumber) {
                    
                }, saveTask: function(saveTaskNumber) {
                                    
                }
        };
    }]);