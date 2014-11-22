var myApp = angular.module('myApp',[]);

  myApp.controller('kevinController', ['$scope', function($scope) {
    console.log("this is angular");

    $scope.hover = function(link) {
      if (link == "furniture") 
      {
        document.getElementById("header").style.backgroundColor="rgba(1, 155, 155, .4)";
      }
      else if (link == "art") 
      {
        document.getElementById("header").style.backgroundColor="rgba(120, 155, 35, .4)";
      }
      else if (link == "home") 
      {
        document.getElementById("header").style.backgroundColor="rgba(125, 225, 205, .4)";
      }
      else if (link == "contact") 
      {
        document.getElementById("header").style.backgroundColor="rgba(190, 160, 25, .4)";
      }
      // document.getElementById(link).style.borderBottom="1px solid white";
      document.getElementById(link).style.color="white";
    }

    $scope.unhover = function(link) {
      // document.getElementById(link).style.borderBottom="0";
      document.getElementById(link).style.color="black";
    }
}]);