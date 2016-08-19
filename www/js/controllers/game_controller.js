'use strict';
angular.module('liveScoreUpdaterApp')
.controller('gameController', function($scope, fetchService) {
	$scope.detailedView = true;

  fetchService.fetchGame('stryktipset').then(data => {
    $scope.games = data.games;
    $scope.$apply();
  });
  $scope.week = new Date().getWeekNumber();

  $scope.toggleViewChange = function() {
  	$scope.detailedView = !$scope.detailedView;
  }
});