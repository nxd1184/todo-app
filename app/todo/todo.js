'use strict';

angular.module('myApp.todo', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/todo', {
        templateUrl: 'todo/todo.html',
        controller: 'TodoCtrl'
    });
}])

.controller('TodoCtrl', ['$scope',function($scope) {
    $scope.todos = [];
    $scope.todo = '';
    $scope.selectAllItem = false;

    $scope.selectAll = function() {
        if($scope.todos) {
            for(var i = 0; i < $scope.todos.length; i++) {
                var t = $scope.todos[i];
                t.deleted = $scope.selectAllItem;
            }
        }
    }

    $scope.save = function(value) {
        $scope.todos.push({
            'deleted': false,
            'value': value
        });
        $scope.todo = '';
    }

    $scope.delete = function(index) {
        $scope.todos.splice(index,1);
    }

    $scope.deleteSelectedItem = function() {
        var flag = false;
        for(var i = 0; i < $scope.todos.length; i++) {
            var t = $scope.todos[i];
            if(t.deleted) {
                $scope.todos.splice(i,1);
                i--;
                flag = true;
            }
        }
        if(flag) {
            $scope.selectAllItem = false;
        }

    }
}]);