'use strict';
angular.module('liveScoreUpdaterApp')
.controller('gameController', function($scope, fetchService, $timeout) {
	$scope.detailedView = true;
  fetchService.fetchGame('stryktipset').then(data => {
    $scope.games = data.games;
    watchGameStarted();
    $scope.$apply();
  });
  $scope.week = new Date().getWeekNumber();

 	$scope.toggleViewChange = function() {
  	$scope.detailedView = !$scope.detailedView;
  }

  function watchGameStarted() {
  	const currentTime = Date.now();
  	$scope.games.forEach(game => {
  		const gameDate = new Date(game.date);
  		if (gameDate.getTime() < currentTime) {
  			game.hasStarted = true;
  		}
  	});
  	$timeout(function() {
  		watchGameStarted();
  	},5000)
  }

});