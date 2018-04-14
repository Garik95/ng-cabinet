 var cabapp = angular.module('cabinet', ['ngMaterial','ngRoute'], function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('green');
  });

	cabapp.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {
		console.log($routeProvider);
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : '../pages/home.html',
				// controller  : 'mainController'
      })
      .when('/services', {
				templateUrl : '../../pages/services.html',
				// controller  : 'mainController'
			})
			.otherwise({redirectTo:"/"});
			$locationProvider.html5Mode(true);
	}]);


  cabapp.controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });

    };
  });