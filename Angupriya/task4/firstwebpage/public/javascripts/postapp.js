
var myApp=angular.module('firstApp',['ui.router','restangular'])
myApp.config(function($stateProvider,$urlRouterProvider,RestangularProvider) {
    RestangularProvider.setBaseUrl('http://localhost:3000');
    $stateProvider
    .state('post', {
      
      controller: "postCtrl",
      templateUrl: "api/post.html"
    
    })
    .state('post.content',{
      url: "/:postId",
      controller:"contentCtrl",
      templateUrl:"api/content.html"
    })
    .state('post.content.comment',{
      url: "/:Id",
      controller:"commentCtrl",
      templateUrl:"api/comment.html"
    })
    
  })
  myApp.run(['$state',function($state){
  $state.transitionTo('post')
    }])
    

myApp.controller('postCtrl',['$scope','Restangular','$state',function (scope, ra,st)  
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
    
      scope.add=function(){
        ra.all("apiposts").post(scope.newpost).then(function(o){
          st.go(st.current, {}, {reload: true});
      })
      }

      scope.newcomments=function(idd){
        console.log("newcomments")
        console.log(scope.newcom)
        ra.one("apiposts",idd).post("apicomments", scope.newcom).then(function() {
        console.log("Object saved OK");
       })
      }
      scope.showcomments = function(){
        alert(scope.id)
        ra.one("apicomments",scope.id).get().then(function (o){
          scope.comments=o
          console.log(o)
      })
      }
}])

myApp.controller('contentCtrl',['$scope','Restangular','$state','$stateParams',function (scope, ra,state,params)  
{
      ra.one('apiposts',params.postId).get().then(function(u){
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
{ alert("comment ctrl")
  ra.one("apicomments",params.Id).get().then(function (o){
          scope.comments=o

})
}])












































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


