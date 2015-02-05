app.controller('ChapterController', ['$scope', 'books', '$routeParams', function($scope, books, $routeParams) {
  books.success(function(data) {
    // Your code here



    // If there no more chapters left, go back to the bookshelf view
    if($routeParams.chapter >= $scope.book.chapters.length - 1) {
      $scope.nextChapterIndex = "#";
    }
  });

  // Using these properties to create the URLs in line 1 and line 11 of view/chapter.html
  $scope.currentBookIndex = parseInt($routeParams.book);
  $scope.currentChapterIndex = parseInt($routeParams.chapter);
  $scope.nextChapterIndex = $scope.currentChapterIndex + 1;
}]);