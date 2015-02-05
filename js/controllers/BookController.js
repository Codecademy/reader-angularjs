app.controller('BookController', ['$scope', '$routeParams', function($scope, $routeParams) {
  

  // Using this property to create the URL in line 9 of views/book.html
  $scope.currentBookIndex = parseInt($routeParams.bookId);
  
}]);