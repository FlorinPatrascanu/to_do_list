var app = angular.module('todo', ['ngRoute' , 'ngAnimate']);

app.config(routing);

function routing($routeProvider){
    $routeProvider
        .when('/tasks',{
            templateUrl: 'templates/tasks.html',
            controller: 'todoController'
        })
        .when('/categories',{
            templateUrl: 'templates/categories.html',
            controller: 'categoriesController'
        })
        .otherwise({
            redirectTo: '/tasks'
        });
}