var app = angular.module('ReaderApp', ['ngRoute']);

app.config(function($routeProvider) {

	$routeProvider
	.when('/books', {
		controller: 'BookShelfController',
		templateUrl: '/views/bookshelf.html'
	})
	.otherwise({
		redirectTo: '/books'
	});
});