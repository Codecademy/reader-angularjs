app.controller('BookController', ['$scope', '$routeParams', function($scope, $routeParams) {
  // Your code here
  

  // Using this property to create the URL in line 9 of views/book.html
  $scope.currentBookIndex = parseInt($routeParams.bookId);
  
}]);
