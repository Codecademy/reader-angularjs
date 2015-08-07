// 'ngRoute' is injected into the module's dependency so that routing is available for the app to use.
var app = angular.module('ReaderApp', ['ngRoute']);

//app.config with $routeProvider allows us to set up routes
app.config(function($routeProvider) {

//$routeProvider is in the function and defined down here
//.when & .otherwise define the routes. 
//'/books' is the url, the controller is established here and templateUrl points to where to go
	$routeProvider
	.when('/books', {
		controller: 'BookshelfController',
		templateUrl: 'views/bookshelf.html'
	})
	// this allows a user to go to a specific book when a book is clicked on, hence the new route
	.when('/books/:bookId', {
		controller: 'BookController',
		templateUrl: 'views/book.html'
	})
	//this route enables a user to select a specific chapter
	.when('/books/:bookId/chapters/:chapterId', {
		controller: 'ChapterController',
		templateUrl: 'views/chapter.html'
	})
	.otherwise({
		redirectTo: '/books'
	});
});