angular.module('todo')
    .directive('todoItem', function () {
        return {
            restrict: 'A',
            scope: {
                item: '=',
                index: '=',
                remove: '&'
            },
            templateUrl: 'templates/itemTemplate.html',
            controller: function ($scope, $element) {
                      
            }
        }
    });