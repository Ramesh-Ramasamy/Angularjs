
var myApp=angular.module('firstApp',['ui.router','restangular','angularUtils.directives.dirPagination'])
myApp.config(function($stateProvider,$urlRouterProvider,RestangularProvider) {
  RestangularProvider.setBaseUrl('http://localhost:3000');
  $stateProvider

  // .state('user',{

  //   controller: "userCtrl",
  //   templateUrl: "api/login.html"

  // })
  .state('post', {
    views:{
      'header':{
        templateUrl: "api/header.html"
      },
      '':{
    controller: "postCtrl",
    templateUrl: "api/post.html"
    }
  }
  })
  .state('post.content',{
    url: "/:Id",
    controller:"contentCtrl",
    templateUrl:"api/content.html"
  })
  .state('post.content.viewcomment',{
    views: {
      'viewcomments':{
        controller:"commentCtrl",
        templateUrl:"api/viewcomment.html"
      }
    }
  })
  .state('post.content.newcomment',{
    views:{
      'newcomments':{
        controller:"commentCtrl",
        templateUrl:"api/newcomment.html"
      }
    }
  })
})  
myApp.run(['$state',function($state){
  $state.transitionTo('post')
}])

// myApp.controller('userCtrl',function($scope,$stateParams,Restangular,Session,$state){
//     $scope.checkuser = function(){
//       Restangular.all("authenticate_user").post($scope.user).then(function(o){
//         console.log(o);
//       })
//     }
//    }


myApp.controller('postCtrl',['$scope','Restangular','$state','$stateParams',function (scope, ra,st,params)  
{
  ra.all("apiposts").getList().then(function (o){
    scope.posts = o;
    console.log(o);
    var totalcount=0
    for(var i = 0; i < scope.posts.length; i++){
      var count=scope.posts[i].count
      totalcount += count;
    }
    scope.tc=totalcount
    console.log(scope.tc)
  })
  scope.add=function(){
    ra.all("apiposts").post(scope.newpost).then(function(o){
      st.go(st.current, {}, {reload: true});
    })
  }

}])

myApp.controller('contentCtrl',['$scope','Restangular','$state','$stateParams',function (scope, ra,state,params)  
{  
    ra.one('apiposts',params.Id).get().then(function(u){
    scope.post=u
    scope.post.count=u.count+1;
    scope.post.put();
  })

  ra.all("apiposts").getList().then(function (o){
    scope.records = o;
    var totalcount=0
    for(var i = 0; i < scope.records.length; i++){
      var count=scope.records[i].count
      totalcount += count;
    }
    scope.totalcount=totalcount
  })
}])

myApp.controller('commentCtrl',['$scope','Restangular','$state','$stateParams',function (scope, ra,state,params)  
{ 

  ra.one("apicomments",params.Id).get().then(function (o){
    scope.comments=o
  })
  scope.newcomments=function(){
    ra.all("apiposts/"+params.Id+"/apicomments").post(scope.newcom).then(function(o) {
      // scope.comments.push(o[0])
      state.go("post.content.viewcomment")
    })
  }
}])







































































































































































































// myApp.controller('newcommentCtrl',['$scope','Restangular','$state','$stateParams',function (scope, ra,state,params)  
// {
//       scope.newcomments=function(){

//         console.log(scope.newcom)
//         ra.all("apiposts/"+params.newId+"/apicomments").post(scope.newcom).then(function() {
//         alert("successfully added")
//        })
//       }

// }])

    // .state('post.content.newcomment',{
    //   url: "/:newId",
    //   controller:"newcommentCtrl",
    //   templateUrl:"api/newcomment.html"
    // })












      // scope.newcomments=function(){
      //   console.log("newcomments")
      //   console.log(scope.newcom)
      //   alert(params.newId)
      //   ra.one("apiposts",params.newId).post("apicomments", scope.newcom).then(function() {
      //   console.log("Object saved OK");
      //  })
      // }
      // scope.showcomments = function(){
      //   alert(scope.id)
      //   ra.one("apicomments",scope.id).get().then(function (o){
      //     scope.comments=o
      //     console.log(o)
      // })











      //  scope.counter=function(id){
      //   ra.one('apiposts',id).get().then(function(u){
      //   scope.id=id
      //   scope.c=u
      //   scope.text="count value:"
      //   scope.c.count=u.count+1;
      //   scope.txt="totalcount"
      //   scope.tc=++scope.tc|| 0
      //   scope.c.put();

      //  })
      // }


 //   .state('content', {
  //     url: "/:postId",
  //     views: {
  //     'postview':{
  //     controller: "postCtrl",
  //     templateUrl: "api/post.html"
  //    },

  //       'contentview':{
  //       controller: "contentCtrl",
  //     templateUrl: "api/content.html"
  //   }
  //   }
  //  })
  //   .state('add',{
  //     views:{
  //     'postview':{
  //     controller: "postCtrl",
  //     templateUrl: "api/post.html"
  //    },

  //     'addview':{
  //     controller: "addCtrl",
  //     templateUrl: "api/addbutton.html"
  //     }
  //   }
  // })
    // $urlRouterProvider.otherwise('/');


// myApp.controller('contentCtrl',['$scope','Restangular','$state','$stateParams',function (scope, Rest,state,params)  
// {  
// alert("content ctrl")
// Rest.one('apiposts',params.postId).get().then(function(u){
//   alert("counter")
//   scope.c=u
//   scope.counter = function(){
//   scope.c.count=u.count+1;
//   scope.c.put();
//   }

// })
// }])



// Rest.all("apiposts").getList().then(function(u) {
//   var  content = u[params.postId];
//  // user === {id: 1, name: "Tonto"}
//  console.log(u[13])
//  console.log(content)
//   scope.c=content
//   scope.c.count = scope.c.count+1;
//   scope.c.put();

  // Rest.one("apiposts/"+params.postId).get().then(function (o){
  //     scope.posts = o;
  //     console.log(o)
  //     scope.posts.count=scope.posts.count+1
  //     scope.posts.put().then(function(o){
  //       alert('updated successfully');
  //     })
  //   })

// myApp.controller('addCtrl',['$scope', 'Restangular','$stateParams','$state',function(scope,Rest,params,state){

//     scope.save = function(){      
//       console.log(scope.newpost.name)
//        Rest.all("apiposts").post(scope.newpost).then(function(o){
//         state.go('post');
//       })
//     }
//   }
//   ])


