'use strict';
angular.module('liveScoreUpdaterApp')
.controller('gameController', function($scope, fetchService) {
  fetchService.fetchGame('stryktipset').then(data => {
    $scope.games = data.games;
    $scope.$apply();
  });
  $scope.week = new Date().getWeekNumber();
});