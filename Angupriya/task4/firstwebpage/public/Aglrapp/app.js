var myApp=angular.module('firstApp',['ui.router','restangular'])
myApp.config(function($stateProvider,RestangularProvider) {
    RestangularProvider.setBaseUrl('http://localhost:3000');
    $stateProvider
    .state('post', {
      controller: "postCtrl",
      templateUrl: "Aglrapp/partials/display.html"
    })
  })

myApp.controller('postCtrl',['$scope','Restangular','$state',function (s, ra,st)  
{

  ra.all("details").getList().then(function (o){
      s.posts = o;
       console.log(s.posts);
    });
}])




















