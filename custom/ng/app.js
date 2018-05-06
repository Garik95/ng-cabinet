 var cabapp = angular.module('cabinet', ['ngMaterial','ngRoute'], function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('green');
  });

	cabapp.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : '../pages/home.ejs',
				controller  : 'mainController'
      })
      .when('/services', {
				templateUrl : '../../pages/services.ejs',
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

  cabapp.controller('mainController', function ($scope, $timeout) {
    $scope.isShow = true;
    $scope.name = "Home!1";
    $scope.isShow = false;
  });