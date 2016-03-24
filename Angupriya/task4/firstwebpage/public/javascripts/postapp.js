
var myApp=angular.module('firstApp',['ui.router','restangular'])
myApp.config(function($stateProvider,$urlRouterProvider,RestangularProvider) {
    RestangularProvider.setBaseUrl('http://localhost:3000');
    $stateProvider
    .state('post', {
      views: {
      'postview':{
      controller: "postCtrl",
      templateUrl: "api/post.html"}
    }
    })
    .state('content', {
      url: "/:postId",
      views: {
      'postview':{
      controller: "postCtrl",
      templateUrl: "api/post.html"
     },
      
        'contentview':{
        controller: "contentCtrl",
      templateUrl: "api/content.html"
    }
    }
   })
    .state('add',{
      views:{
      'postview':{
      controller: "postCtrl",
      templateUrl: "api/post.html"
     },
      
      'addview':{
      controller: "addCtrl",
      templateUrl: "api/addbutton.html"
      }
    }
  })
    // $urlRouterProvider.otherwise('/');
  })
myApp.run(['$state',function($state){
  $state.transitionTo('post')
    }])
    

myApp.controller('postCtrl',['$scope','Restangular','$state',function (s, ra,st)  
{
  ra.all("apiposts").getList().then(function (o){
      s.posts = o;
       console.log(o);
    });
}])

myApp.controller('contentCtrl',['$scope','Restangular','$state','$stateParams',function (s, ra,st,sp)  
{  ra.one("apiposts/"+sp.postId).get().then(function (o){
      s.posts = o;
      console.log(o)
    });
}])

myApp.controller('addCtrl',['$scope', 'Restangular','$stateParams','$state',function(scope,Rest,params,state){
  
    scope.save = function(){      
      console.log(scope.newpost.name)
       Rest.all("apiposts").post(scope.newpost).then(function(o){
        state.go('post');
      })
    }
  }
  ])


