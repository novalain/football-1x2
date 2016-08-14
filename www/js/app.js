angular.module('liveScoreUpdaterApp', ['ui.router'])
.config( function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      // TODO: add template and set up first view
      template:'<h1>Hello main view</h1>',
      controller: 'mainViewController'
    });
  $urlRouterProvider.otherwise('home');
});
