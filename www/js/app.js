angular.module('liveScoreUpdaterApp', ['ui.router'])
.config( function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('selectGameState', {
      url: '/select-game',
      templateUrl: 'views/select_game_view.html',
      controller: 'selectGameController'
    })
    .state('gameState', {
      url: '/game:whichGame',
      templateUrl: 'views/game_view.html',
      controller: 'gameController'
    });
  $urlRouterProvider.otherwise('select-game');
});
