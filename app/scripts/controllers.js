angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

  /////////////////////////
  //// SIGNUP FORM START //
  /////////////////////////
  
  // Form data for the signup modal
  $scope.signupData = {};

  // Create the signup modal that we will use later
  $ionicModal.fromTemplateUrl('templates/signup.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modalSign = modal
  });

  // Triggered in the signup modal to close it
  $scope.closesignup = function() {
    $scope.modalSign.hide();
  };

  // Open the signup modal
  $scope.signup = function() {
    $scope.modalSign.show();
  };

  // Perform the signup action when the user submits the signup form
  $scope.dosignup = function() {
    console.log('Doing signup', $scope.signupData);

    // Simulate a signup delay. Remove this and replace with your signup
    // code if using a signup system
    $timeout(function() {
      $scope.closesignup();
    }, 1000);
  };

})

// .controller('PlaylistsCtrl', function($scope) {
//   $scope.playlists = [
//     { title: 'Reggae', id: 1 },
//     { title: 'Chill', id: 2 },
//     { title: 'Dubstep', id: 3 },
//     { title: 'Indie', id: 4 },
//     { title: 'Rap', id: 5 },
//     { title: 'Cowbell', id: 6 }
//   ];
// })

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
