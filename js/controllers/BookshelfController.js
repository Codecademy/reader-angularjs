// the books service is used to load data from the server into $scope.MyBooks
// when adding to the dependency array, it must be called back in the function.
// success paralys the data into $scope.MyBooks
app.controller('BookshelfController', ['$scope', 'books', function($scope, books){
	books.success(function(data) {
		$scope.MyBooks = data;
	});
}]);

