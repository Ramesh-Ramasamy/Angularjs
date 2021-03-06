var myApp=angular.module('firstApp',['ui.router','restangular'])
myApp.config(function($stateProvider,$urlRouterProvider,RestangularProvider) {
    RestangularProvider.setBaseUrl('http://localhost:3000');
    $stateProvider
    .state('post', {
      controller: "postCtrl",
      templateUrl: "Aglrapp/partials/display.html"
    })

    .state('show', {
      url: "show/:userId",
      controller: "showCtrl",
      templateUrl: "Aglrapp/partials/show.html"
    })


    .state('edit', {
      url: "edit/:editId",
      controller: "editCtrl",
      templateUrl: "Aglrapp/partials/edit.html"
    })


    .state('add', {
      controller: "addCtrl",
      templateUrl: "Aglrapp/partials/add.html"
    })

    .state('delete',{
      url:"delete/:deleteId",   
      template:"<script>alert('Deleted Successfully')</script>",
      controller: "deleteCtrl" 
    })
    $urlRouterProvider.otherwise('/');
  })

myApp.controller('postCtrl',['$scope','Restangular','$state',function (s, ra,st)  
{
  alert('inside postCtrl of dummy ...........')
  ra.all("details").getList().then(function (o){
      s.posts = o;
       console.log(s.posts);
    });
}])


myApp.controller('showCtrl',['$scope','Restangular','$state','$stateParams',function (s, ra,st,sp)  
{ 
  var userId=sp.userId;
  ra.one("details/"+userId).get().then(function (o){
      s.posts = o;
    });
}])

myApp.controller('editCtrl',['$scope', 'Restangular','$stateParams','$state',function(scope,Rest,params,state){
    Rest.one("details/"+params.editId).get().then(function(o){
      scope.fulldetails=o;      
      console.log(o);     
    })      
    scope.save = function(){
      scope.fulldetails.put().then(function(o){
        alert('updated successfully');
        state.go('post');
      })
    }
  }])



myApp.controller('addCtrl',['$scope', 'Restangular','$stateParams','$state',function(scope,Rest,params,state){
    alert('addCtrl of app')
    Rest.all('details').getList().then(function(o){
       alert("hello inside addCtrl")
      o = Rest.stripRestangular(o);
      scope.posts=o;
      console.log(scope.posts);
    })
    scope.save = function(){ 
      alert('save ctrl')     
      Rest.all("details").post(scope.newpost).then(function(o){
        state.go('post');
      })
    }
  }])


  myApp.controller('deleteCtrl',['$scope', 'Restangular','$stateParams','$state',function(scope,Rest,params,state){
    Rest.one("details/"+params.deleteId).remove();
    alert('deleted successfully');
  }])











// myApp.controller('editCtrl',['$scope','Restangular','$state','$stateParams',function (s, ra,st,sp)  
// {
//   var editId=sp.editId;
//   ra.one("details",editId).get().then(function (o){
//         s.edit = o;
//      })
//   s.save=function(){
//     // alert("before assigning"+s.edit.detail.name)
//     // alert('inside save')
//     s.edit.detail.name = s.edited;  
//      alert(s.edit.detail.name +'id:'+s.edit.detail.id)
//      console.log(s.edit)
//     s.edit.put().then(
//       function (o){
//       alert('success of put')
//       console.log(o)
//       st.go('post',{})
//     })
//   }
//   })
// }])





