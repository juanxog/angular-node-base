var app = angular.module('quicklizt', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider ) {

  $stateProvider
    .state('/', {
      url: "/",
      templateUrl: "views/dash.html",
      controller: "MainController"
    });
    
    
    
    $urlRouterProvider.otherwise(function ($injector, $location) {
		var $state = $injector.get("$state");
		$state.go("/");
	});
    
    
});


app.run(function($rootScope) {
    

});
    
    
    