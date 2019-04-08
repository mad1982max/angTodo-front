let mainApp = angular.module('mainApp', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider.when('/login', 
    {
      templateUrl:'views/login.html',
      controller: 'loginController'
    });

    $routeProvider.when('/signin', 
    {
      templateUrl:'views/signin.html',
      controller: 'signController'
    });

    $routeProvider.when('/todo', 
    {
      templateUrl:'views/todo.html',
      controller: 'todoController'
    });

    $routeProvider.otherwise({
      redirectTo: '/login'
    });
})