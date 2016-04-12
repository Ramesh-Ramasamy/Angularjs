var mydashApp=angular.module('dashApp',[])
mydashApp.directive('dashboard',function($compile,$location){
  // return{
  //   restrict: 'E',
  //   controller: "dashboardCtrl",
  //   transclude: true,
  //   replace: true,
  //   template: '<div><button ng-click="showContent=true">{{buttonText}}</button><h3 ng-show="showContent">hello</h3></div>',
  //   link: function( $scope, $element, $attrs ) {
  //       $scope.buttonText = $attrs.text;
  //        $element.addClass('regbut')
  //     }
  //   // link: function(scope,element,attrs){
  //   //  
  //   //   }   
  // }




return{
  template: 'dashboard',
  controller: "dashboardCtrl",
      link: function(scope, element, attrs) {
              element.addClass('regbut')
              element.bind("click", function () {
              var html = "<p>Template:</p><div ng-include src=\"'api/dashboard.html'\"></div>"
              var templateGoesHere = angular.element(document.getElementById('contents'));
              templateGoesHere.html(html);
              $compile(templateGoesHere)(scope);
              scope.$apply();
          });
      }
    }
})




mydashApp.controller('dashboardCtrl',function ($scope,Restangular){
  alert('dashboard ctrl')
  alert($scope.location)
    Restangular.all("/with_title").getList().then(function(o){
    $scope.Titlelists=o
  })
    Restangular.all("/without_title").getList().then(function(o){
    $scope.lists=o
  })

    Restangular.all("/topuser").getList().then(function(o){
    $scope.topusers=o 
  })

    Restangular.all("/topposts").getList().then(function(o){
    $scope.topposts=o
    console.log("posts"+$scope.topposts)
  },
   function(error){
      alert("no such file present")
    
  })

})