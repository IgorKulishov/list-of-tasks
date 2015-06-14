angular.module('serviceHtml', [])
    .service("jsonService", ['$http', '$q', function ($http, $q) {
        //return array to controller and than to "todoListController" in html
        return {readList: function() {
                var deferred = $q.defer();
                return $http.get('/rest/todo').then(
                    function(response) {
                        return response.data;
                    },
                    function(err) {
                        return err;
                    });
            }, addNewTask: function(newTask) {
                                 
            }, deleteTask: function(deleteTaskNumber) {
                
            }, editTask: function(editTaskNumber) {
                
            }, saveTask: function(saveTaskNumber) {
                                
            }
        };
    }]);