function MainController ($scope) {
  $scope.likes = 0;
  $scope.text = "Likes";
  $scope.direction = true;
  $scope.sign = "-";

  
  $scope.countLike = function () {

    $scope.toggle = function () {
      $scope.direction = !$scope.direction;
      if ($scope.direction) {
        $scope.sign = "-"
      } else {
        $scope.sign = "+"
      }
    }

    $scope.direction ? $scope.likes += 1 : $scope.likes -= 1;

    $scope.likes === 1 ? $scope.text = "Like" : $scope.text = "Likes";
    
  }

}

MainController.$inject = ['$scope'];
export { MainController };