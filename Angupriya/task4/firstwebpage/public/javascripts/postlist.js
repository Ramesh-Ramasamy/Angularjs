var postApp=angular.module('postApp',[])
postApp.directive('header',function(){
  return{
    restrict: 'E',
    templateUrl: 'api/header.html'
  }  
})



postApp.directive('post',function(){
  return{
    restrict: 'E',
    controller: 'postCtrl',
    templateUrl: 'api/post.html'
  }
})

postApp.directive('content',function(){
  return{
  require:'^post',
  restrict: 'E',
  controller: 'contentCtrl',
  templateUrl: "api/content.html"
  }
})


postApp.controller('postCtrl',['$scope','Restangular','$state','$stateParams','$http','User',function (scope, ra,st,params,$http,User)  
{
  ra.all("apiposts").getList().then(function (o){
    scope.posts = o;
    var totalcount=0
    for(var i = 0; i < scope.posts.length; i++){
      var count=scope.posts[i].count
      totalcount += count;
    }
    scope.tc=totalcount
  })
  scope.add=function(){
    ra.all("apiposts").post(scope.newpost).then(function(o){
      ra.all("apiposts").getList().then(function (oo){
        scope.posts=oo
        alert("added successfully")
    })
    },
    function(error){
      alert("name already present")
    })
  }
  // scope.content=function(id){
  //   alert("display content"+id)
    // ra.one('apiposts',id).get().then(function(u){
    // scope.post=u
    // scope.post.count=u.count+1;
    // scope.post.put();
  // }

}])

myApp.controller('contentCtrl',['$scope','Restangular',function (scope, ra)  
{  
    scope.content=function(id){
    ra.one('apiposts',id).get().then(function(u){
    scope.post=u
    scope.post.count=u.count+1;
    scope.post.put();
    })
  }
}])