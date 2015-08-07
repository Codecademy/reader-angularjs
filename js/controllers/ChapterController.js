app.controller('ChapterController', ['$scope', 'books', '$routeParams', function($scope, books, $routeParams) {
  books.success(function(data) {
    // uses books service to load a single chapter into $scope.chapter
    // see API JSON data for chapters
    $scope.book = data[$routeParams.bookId];
    // access array of chapters inside $scope.book and get a specific chapter using
    // $routeParams.chapterId, stores the specifc chapter into $scope.chapter
    $scope.chapter = $scope.book.chapters[$routeParams.chapterId];


    // If there no more chapters left, go back to the bookshelf view
    if($routeParams.chapterId >= $scope.book.chapters.length - 1) {
      $scope.nextChapterIndex = "#";
    }
  });

  // Using these properties to create the URLs in line 1 and line 11 of view/chapter.html
  $scope.currentBookIndex = parseInt($routeParams.bookId);
  $scope.currentChapterIndex = parseInt($routeParams.chapterId);
  $scope.nextChapterIndex = $scope.currentChapterIndex + 1;
}]);
