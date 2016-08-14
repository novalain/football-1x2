angular.element(document).ready(() => {
  if (window.cordova) {
    console.log("Running in Cordova, will bootstrap AngularJS once 'deviceready' event fires.");
    document.addEventListener('deviceready', () => {
      console.log("Deviceready event has fired, bootstrapping AngularJS.");
      angular.bootstrap(document.body, ['liveScoreUpdaterApp']);
    }, false);
  } else {
    console.log("Running in browser, bootstrapping AngularJS now.");
    angular.bootstrap(document.body, ['liveScoreUpdaterApp']);
  }
});