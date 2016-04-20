var mydashApp=angular.module('dash.dir',[])
mydashApp.directive('dashboard',function($compile,$location){
return{
  template: 'dashboard',
  controller: "dashboardCtrl",
      link: function(scope, element, attrs) {
              element.addClass('regbut')
              element.bind("click", function () {
              var html = "<p>dashboard:</p><div ng-include src=\"'api/dashboard.html'\"></div>"
              var templateGoesHere = angular.element(document.getElementById('contents'));
              templateGoesHere.html(html);
              $compile(templateGoesHere)(scope);
              scope.$apply();
          });
      }
    }
})




mydashApp.controller('dashboardCtrl',function ($scope,Restangular){
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
  