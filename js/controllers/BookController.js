app.controller('BookController', ['$scope', 'books', '$routeParams', function($scope, books, $routeParams) {
  //uses the 'books' service to load a single book into $scope.book property.
  // uses 'books' service to fetch an array of books from the server then uses 
  // $routeParams.bookId to access teh spcific book by index and store it into $scope.book

  books.success(function(data) {
    $scope.book = data[$routeParams.bookId];
  });
  // Remember we can use Angular's $routeParams to retrieve bookId from the URL by using $routeParams.bookId.

  
  // Using this property to create the URL in line 9 of views/book.html
  $scope.currentBookIndex = parseInt($routeParams.bookId);
  
}]);
