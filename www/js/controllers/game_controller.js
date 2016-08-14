'use strict';

angular.module('liveScoreUpdaterApp')
.controller('gameController', function($scope, fetchService) {
  fetchService.fetchGame('stryktipset').then(feeds => {
    console.log("got res", feeds);
  });
});