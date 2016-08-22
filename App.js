(function() {

  "use strict";

  var App = angular.module("App", [
    "App.controllers",
    "App.services",
    "App.directives",
    "App.filters",
    "ngRoute",
    "ngResource"
  ]);

  App.config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'view/home.html',
        title: 'Home'
      })
      .when('/about', {
        templateUrl: 'view/about.html',
        title: 'About Us'
      })
      .when ('/consulting', {
        templateUrl: 'view/consulting.html',
        title: 'Consulting and Services'
      })
      .when ('/training', {
        templateUrl: 'view/training.html',
        title: 'Training'
      })
      .when ('/careers', {
        templateUrl: 'view/careers.html',
        title: 'Careers'
      })
      .when ('/contact', {
        templateUrl: 'view/contact.html',
        title: 'Contact Us'
      })
      .when ('/downloads', {
        templateUrl: 'view/downloads.html',
        title: 'Downloads'
      })
      .when ('/news', {
        templateUrl: 'view/news.html',
        title: 'News and Events'
      })
      .otherwise({redirectTo : 'home'});
  });

}());