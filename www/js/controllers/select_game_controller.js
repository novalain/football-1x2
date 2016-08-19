angular.module('liveScoreUpdaterApp')
.controller('selectGameController', function($scope, $state) {
  console.log('in select controller');
  $scope.changeState = (state, data) => {
    $state.go(state, {whichGame: data});
  }
  $scope.weekNumber = () => {
    const date = new Date();
    return date.getCurrentWeek();
  }
});
