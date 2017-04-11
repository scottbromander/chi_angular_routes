var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/home', {
            templateUrl : 'views/templates/home.html',
            controller: 'HomeController',
            controllerAs: 'home'
        })
        .when('/blog', {
            templateUrl : 'views/templates/blog.html',
            controller: 'BlogController',
            controllerAs: 'blog'
        })
        .when('/menu', {
            templateUrl : 'views/templates/menu.html',
            controller: 'MenuController',
            controllerAs: 'menu'
        })
        .when('/contact', {
            templateUrl : 'views/templates/contact.html',
            controller: 'ContactController',
            controllerAs: 'contact'
        })
        .otherwise({
            redirectTo: 'home'
        });
}]);
