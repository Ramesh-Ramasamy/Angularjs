var myApp=angular.module('firstApp',['ui.router','restangular'])
myApp.config(function($stateProvider,RestangularProvider) {
    RestangularProvider.setBaseUrl('http://localhost:3000');
    $stateProvider
    .state('post', {
      controller: "postCtrl",
      templateUrl: "angular/partials/post.html"
    })
  })

myApp.controller('postCtrl',['$scope','Restangular','$state',function (s, ra,st)  
{

  ra.all("posts").getList().then(function (o){
      s.posts = o;
       console.log(s.posts);
    });
}])





















//   myApp.controller('CommentsCtrl',function($scope){
//     console.log("inside controller");
//     $scope.name="angu"
//   })
// myApp.directive('helloWorld',function(){

//   return{
//     restrict:'E',
//     scope:{
//       value:'@'
//     },
//     template:'<span>hello {{value}}</span>'
//   }
// })

