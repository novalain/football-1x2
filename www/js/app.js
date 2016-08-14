angular.module('liveScoreUpdaterApp', ['ui.router'])
.config( function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      // TODO: add template and set up first view
      templateUrl: 'views/select_game_view.html',
      controller: 'selectGameController'
    });
  $urlRouterProvider.otherwise('home');
});
