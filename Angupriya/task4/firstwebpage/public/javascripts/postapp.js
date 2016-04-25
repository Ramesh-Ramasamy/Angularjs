


// var myApp=angular.module('firstApp',['post.dir',,'comment.dir','dash.dir','ui.router','restangular','angularUtils.directives.dirPagination'])
// // myApp.config(function($stateProvider,$urlRouterProvider,RestangularProvider) {
// //   RestangularProvider.setBaseUrl('http://localhost:3000');
// //   $stateProvider

// //   .state('user',{
// //     views:{
// //       'header':{
// //         templateUrl: "api/header.html",
// //       },
// //       '':{
// //         controller: "loginCtrl",
// //         templateUrl: "api/login.html"
// //     }}
// //   })
  
// //   .state('signup',{
// //     controller: "signupCtrl",
// //     templateUrl: "api/signup.html"
// //   })
  
// // .state('dashboard',{
// //     views:{
// //       'header':{
// //         templateUrl: "api/header.html",
// //         },
// //         'post':{
// //           controller: "postCtrl",
// //           templateUrl: "api/post.html"
// //         }
// //         // '':{
// //         //   controller:'dashboardCtrl',
// //         //   templateUrl: 'api/dashboard.html'
          
// //         // }
// //       }
// //   })
// //   // .state('post', {
// //   //   views:{
// //   //     'header':{
// //   //       templateUrl: "api/header.html",
// //   //       },
// //   //     'post':{
// //   //        controller: "postCtrl",
// //   //        templateUrl: "api/post.html"
// //   //     }
// //   // }
// //   // })
  
// //   .state('post.content',{
// //     url: "/:Id",
// //     controller:"contentCtrl",
// //     templateUrl:"api/content.html"
// //   })
// //   .state('post.content.viewcomment',{
// //     views: {
// //       'viewcomments':{
// //         controller:"viewcommentCtrl",
// //         templateUrl:"api/viewcomment.html"
// //       }
// //     }
// //   })
// //   .state('post.content.newcomment',{
// //     views:{
// //       'newcomments':{
// //         controller:"commentCtrl",
// //         templateUrl:"api/newcomment.html"
// //       }
// //     }
// //   })
// // })  
// // myApp.run(['$state',function($state){
// //   $state.transitionTo('post')
// // }])


// // myApp.directive('country',function(){
// //   return{
// //     controller:"countryCtrl"
// //     // templateUrl:"api/content.html"
// //   }
// // })

// // myApp.directive('state',function(){
// //   return{
// //     require: '^country',
// //     link:function(scope,element,attrs){
// //       element.bind("click",function(){
// //         scope.$broadcast.country();
// //     })
// //   }
// // }
// // })

// // myApp.controller('countryCtrl',function($scope){
// //     alert("inside country")
// //   this.country=function(){
// //     console.log("state inside the country ")
// //   }
// // })
























// myApp.factory('User',function(Session){
//   var user={}
//     Session.then(function(o){
//       user = o;
//     });
//     return{     
//       getuser : function(){
//         return user;
//       },
//       setuser : function(id,name){
//         user.user_id = id;
//         user.username = name;
//       }

//     }
//   });


//   myApp.factory('Session', function($http) {
//      return $http.get('/userdetails').then(function(result) {  
//           return result.data; 
//       });
//   }); 

// myApp.controller('signupCtrl',function($scope,$stateParams,Restangular,$state,User){
//      $scope.createuser=function(){
//       console.log($scope.user)
//       Restangular.all("apiusers").post($scope.user).then(function(o){
//         alert("successfully signed up")
//         User.setuser(o.id,o.name);
//         $state.go("post")
//       })
//     }

// })
// myApp.controller('loginCtrl',function($scope,$stateParams,Restangular,$state,User){
//     $scope.checkuser = function(){
//       Restangular.all("authenticate_user").post($scope.user).then(function(o){
//           alert("successfully logged in");
//           console.log(o);
//           if(o.name != null){
//             User.setuser(o.id,o.name);
//             $state.go("post");
//           }
//       })
//     }
//    })


// // myApp.controller('postCtrl',['$scope','Restangular','$state','$stateParams','$http','User',function (scope, ra,st,params,$http,User)  
// // {
// //   ra.all("apiposts").getList().then(function (o){
// //     scope.posts = o;
// //     console.log(o);
// //     var totalcount=0
// //     for(var i = 0; i < scope.posts.length; i++){
// //       var count=scope.posts[i].count
// //       totalcount += count;
// //     }
// //     scope.tc=totalcount
// //     console.log(scope.tc)
// //   })
// //   scope.add=function(){
// //     console.log("type")
// //     console.log(scope.newpost);
// //     ra.all("apiposts").post(scope.newpost).then(function(o){
// //       st.go(st.current, {}, {reload: true});
// //     })
// //   }
// // }])

// // myApp.controller('contentCtrl',['$scope','Restangular','$state','$stateParams',function (scope, ra,state,params)  
// // {  
// //     ra.one('apiposts',params.Id).get().then(function(u){
// //     scope.post=u
// //     scope.post.count=u.count+1;
// //     scope.post.put();
// //   })

// //   ra.all("apiposts").getList().then(function (o){
// //     scope.records = o;
// //     var totalcount=0
// //     for(var i = 0; i < scope.records.length; i++){
// //       var count=scope.records[i].count
// //       totalcount += count;
// //     }
// //     scope.totalcount=totalcount
// //   })
// // }])


// myApp.controller('viewcommentCtrl',['$scope','Restangular','$state','$stateParams',function (scope, ra,state,params)  
// { 

//   ra.one("apicomments",params.Id).get().then(function (o){
//     scope.comments=o
//   })
// }])
// myApp.controller('commentCtrl',['$scope','Restangular','$state','$stateParams','User','Session',function (scope, ra,state,params,User,Session)  
// { 
//      alert("newcomments")
//       var response = {}
//       response.user_id = User.getuser().user_id;
//       response.username = User.getuser().username;  
//       if(response.username != null){ 
//         alert(" Hi "+response.username);                
//           scope.session = response;
//         }
//       else{
//           alert("login ...To comment");                   
//           state.go("user");

//         }
      
//       scope.newcomments=function(){
//           scope.newcom.id=scope.session.user_id
//           ra.all("apiposts/"+params.Id+"/apicomments").post(scope.newcom).then(function(o) {
//           state.go("post.content.viewcomment")
//       })
//     }

// }]) 







// // scope.user=function($scope,$stateParams,Restangular,Session,$state){
// //     Session.then(function(response){
// //         if(response.username != null){ 
// //           alert(" Hi "+response.username);                
// //             $scope.session = response;
// //         }
// //           else{
// //             alert(response.username);                   
// //             $state.go("user");
// //           }
// //       });
// // }])







































































































































































































// // myApp.controller('newcommentCtrl',['$scope','Restangular','$state','$stateParams',function (scope, ra,state,params)  
// // {
// //       scope.newcomments=function(){

// //         console.log(scope.newcom)
// //         ra.all("apiposts/"+params.newId+"/apicomments").post(scope.newcom).then(function() {
// //         alert("successfully added")
// //        })
// //       }

// // }])

//     // .state('post.content.newcomment',{
//     //   url: "/:newId",
//     //   controller:"newcommentCtrl",
//     //   templateUrl:"api/newcomment.html"
//     // })












//       // scope.newcomments=function(){
//       //   console.log("newcomments")
//       //   console.log(scope.newcom)
//       //   alert(params.newId)
//       //   ra.one("apiposts",params.newId).post("apicomments", scope.newcom).then(function() {
//       //   console.log("Object saved OK");
//       //  })
//       // }
//       // scope.showcomments = function(){
//       //   alert(scope.id)
//       //   ra.one("apicomments",scope.id).get().then(function (o){
//       //     scope.comments=o
//       //     console.log(o)
//       // })











//       //  scope.counter=function(id){
//       //   ra.one('apiposts',id).get().then(function(u){
//       //   scope.id=id
//       //   scope.c=u
//       //   scope.text="count value:"
//       //   scope.c.count=u.count+1;
//       //   scope.txt="totalcount"
//       //   scope.tc=++scope.tc|| 0
//       //   scope.c.put();

//       //  })
//       // }


//  //   .state('content', {
//   //     url: "/:postId",
//   //     views: {
//   //     'postview':{
//   //     controller: "postCtrl",
//   //     templateUrl: "api/post.html"
//   //    },

//   //       'contentview':{
//   //       controller: "contentCtrl",
//   //     templateUrl: "api/content.html"
//   //   }
//   //   }
//   //  })
//   //   .state('add',{
//   //     views:{
//   //     'postview':{
//   //     controller: "postCtrl",
//   //     templateUrl: "api/post.html"
//   //    },

//   //     'addview':{
//   //     controller: "addCtrl",
//   //     templateUrl: "api/addbutton.html"
//   //     }
//   //   }
//   // })
//     // $urlRouterProvider.otherwise('/');


// // myApp.controller('contentCtrl',['$scope','Restangular','$state','$stateParams',function (scope, Rest,state,params)  
// // {  
// // alert("content ctrl")
// // Rest.one('apiposts',params.postId).get().then(function(u){
// //   alert("counter")
// //   scope.c=u
// //   scope.counter = function(){
// //   scope.c.count=u.count+1;
// //   scope.c.put();
// //   }

// // })
// // }])



// // Rest.all("apiposts").getList().then(function(u) {
// //   var  content = u[params.postId];
// //  // user === {id: 1, name: "Tonto"}
// //  console.log(u[13])
// //  console.log(content)
// //   scope.c=content
// //   scope.c.count = scope.c.count+1;
// //   scope.c.put();

//   // Rest.one("apiposts/"+params.postId).get().then(function (o){
//   //     scope.posts = o;
//   //     console.log(o)
//   //     scope.posts.count=scope.posts.count+1
//   //     scope.posts.put().then(function(o){
//   //       alert('updated successfully');
//   //     })
//   //   })

// // myApp.controller('addCtrl',['$scope', 'Restangular','$stateParams','$state',function(scope,Rest,params,state){

// //     scope.save = function(){      
// //       console.log(scope.newpost.name)
// //        Rest.all("apiposts").post(scope.newpost).then(function(o){
// //         state.go('post');
// //       })
// //     }
// //   }
// //   ])


