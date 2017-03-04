(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];
 function LunchCheckController($scope, $filter) {
   $scope.foodCheck = "";
   $scope.food      = "";
    $scope.checkQty = function(){
      var emptyElements = 0;
      if(!$scope.food){
        $scope.foodCheck = "Please enter data first";
        return;
      }
      var foodList = $scope.food.split(',');
      var foodLength = foodList.length;
      for(var i=0;i<foodLength;i++){
        if(foodList[i]==''){
          emptyElements = emptyElements + 1;
        }
      }
      foodLength = foodLength - emptyElements;
      if(foodLength==0){
        $scope.foodCheck = "Please enter data first";
      }
      else if(foodLength<=3){
        $scope.foodCheck = "Enjoy!";
      }
      else{
        $scope.foodCheck = "Too much!";
      }
  }
}

})();
