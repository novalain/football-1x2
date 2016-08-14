'use strict';

angular.module('liveScoreUpdaterApp')
.controller('gameController', function($scope, fetchService) {
  fetchService.fetchGame('stryktipset').then(data => {
    console.log("games", data);
    $scope.games = data.games;
    $scope.$apply();
  });
  
  $scope.week = new Date().getWeekNumber();
});