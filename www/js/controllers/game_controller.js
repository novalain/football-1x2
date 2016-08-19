'use strict';
angular.module('liveScoreUpdaterApp')
.controller('gameController', function($scope, fetchService, 
                                       $timeout, $stateParams) {
	$scope.detailedView = true;
  $scope.data = load_();

  // Cached data expired, go fetch new
  if (!$scope.data || differenceInDays_($scope.data.stopDate, new Date().getTime()) > 4) {
    fetchService.fetchGame($stateParams.whichGame).then(data => {
      $scope.data = {};
      $scope.data.games = data.games;
      $scope.data.stopDate = data.stopDate;
      watchGameStarted_();
      $scope.$apply();
    });
  }

  $scope.week = new Date().getWeekNumber();

 	$scope.toggleViewChange = () => {
  	$scope.detailedView = !$scope.detailedView;
  }

  $scope.save = () => {
    save_();
  }

  function load_() {
    return JSON.parse(window.localStorage.getItem('data'));
  }

  function save_() {
    window.localStorage.setItem('data', JSON.stringify($scope.data));
  }

  function differenceInDays_(firstMs, secondMs) {
    return Math.round(Math.abs((firstMs - secondMs)/(24*60*60*1000)));  
  }

  function watchGameStarted_() {
  	const currentTime = Date.now();
  	$scope.data.games.forEach(game => {
  		const gameDate = new Date(game.date);
  		if (gameDate.getTime() < currentTime) {
  			game.hasStarted = true;
  		}
  	});
  	$timeout(function() {
  		watchGameStarted_();
  	},5000)
  }
});