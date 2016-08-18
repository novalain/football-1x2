angular.module('liveScoreUpdaterApp')
.controller('selectGameController', function($scope, $state) {
  console.log('in select controller');
  $scope.changeState = state => {
    $state.go(state);
  }
  $scope.weekNumber = () => {
    const date = new Date();
    return date.getCurrentWeek();
  }
});