angular.module('kcc.components', [])
	.controller('navbarController', ['$scope', '$route', '$animate','$http',  function($scope, $route, $animate,$http) {


	$http.get('/api/usuario/menu/moises.bravo@kcl.cl').success(function(menus) {
		
      $scope.menu = menus;
       });



	}]);