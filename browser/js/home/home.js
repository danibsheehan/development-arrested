app.config(function($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html',
        controller: 'HomeCtrl',
    });

});

app.controller('HomeCtrl', function($scope, $window) {
	$scope.redirect = function() {
		$window.location.href = "/script"
		
	}
})