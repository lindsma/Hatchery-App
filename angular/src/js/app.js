(function() {
    'use strict';

    var hatcheryApp = angular.module('hatcheryApp', ['ui.router', 'LocalStorageModule']);

    hatcheryApp.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('hatcheryParent', {
            url: '/',
            abstract: true,
            template: '<ui-view></ui-view>'
        }).state('hatcheryParent.home', {
            url: '',
            controller: 'InventoryController as inventory',
            templateUrl: 'src/templates/eggs.html'
        }).state('hatcheryParent.admin', {
            url: 'admin',
            controller: 'AdminController as admin',
            templateUrl: 'src/templates/admin.html'
        }).state('hatcheryParent.login', {
            url: 'login',
            templateUrl: 'src/templates/login.html'
        }).state('hatcheryParent.register', {
            url: 'register',
            templateUrl: 'src/templates/register.html'
        });
    });
})();
