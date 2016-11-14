function MainController ($scope) {
  $scope.likes = 0;

  $scope.addLike = function () {
    $scope.likes += 1;
  }

  $scope.subtractLike = function () {
    $scope.likes -= 1;
  }

}

MainController.$inject = ['$scope'];
export { MainController };