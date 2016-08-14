angular.module('liveScoreUpdaterApp')
.controller('selectGameController', function($scope, $state) {
  console.log('in select controller');
  $scope.changeState = state => {
    $state.go(state);
  }
});