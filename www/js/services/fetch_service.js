'use strict';

angular.module('liveScoreUpdaterApp')
.service('fetchService', function() {

  function parseGameData_(data) {
    const stopDate = data.RoundInfo.StopDate;
    let result = {stopDate};
    result.games = [];

    data.RoundInfo.Matches.forEach(match => {
      let data = {};
      data.homeTeam = match.HomeTeam;
      data.awayTeam = match.AwayTeam;
      data.score = match.Score;
      data.start = match.MatchStart;
      data.sign = match.Sign;
      data.isFinished = match.IsFinished;
      result.games.push(data);
    })
    return result;
  }

  // TODO: implement for europatips and so on
  function fetchGame(gameUrl) {
    switch(gameUrl) {
      case 'stryktipset':
        return fetch(URL_STRYKTIPSET)
                  .then(result => result.json())
                  .then(data => parseGameData_(data))  

      break;
    }
  }

  return {
    fetchGame : fetchGame
  }
});

