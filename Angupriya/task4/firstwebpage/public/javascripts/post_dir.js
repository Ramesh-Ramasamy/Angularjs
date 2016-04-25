
// var myApp=angular.module('firstApp',['post.dir',,'comment.dir','dash.dir','ui.router','restangular','angularUtils.directives.dirPagination'])

var postDir=angular.module('postDir',['dash.dir','restangular','angularUtils.directives.dirPagination'])
postDir.directive('header',function(){
  return{
    restrict: 'E',
    templateUrl: 'api/header.html'
  }  
})
postDir.directive('post',function(){
  return{
    restrict: 'E',
    controller: 'postCtrl',
    templateUrl: 'api/post.html'
  }
})

postDir.directive('addLink',function(){
  return{
    restrict: 'E',
    controller: 'postCtrl',
    templateUrl: 'api/add_post.html'
  }
})
postDir.directive('content',function(){
  return{
    restrict: 'E',
    controller:'contentCtrl',
    templateUrl: "api/content.html"
  }
})

postDir.directive('viewComments',function(){
  return{
    restrict: 'E',
    controller: 'commentCtrl',
    templateUrl: "api/viewcomment.html",
  }
})

postDir.directive('newComments',function(){
  return{
    restrict: 'E',
    controller: 'commentCtrl',
    templateUrl: "api/newcomment.html",
  }
})

postDir.factory('Post',function(Restangular,$q){
  return{
    getPostlist: function(list){
      return Restangular.all(list).getList()
    },
    totalCount: function(posts){
      var defer= $q.defer();
      var totalcount=0
        if(posts[0].hasOwnProperty("count"))
        {
          for(var i = 0; i < posts.length; i++)
          {
            totalcount+=posts[i].count
          }
        defer.resolve(totalcount)
        }
        else
        {
          defer.reject("count Field is required to calculate its total")
        }
        return defer.promise
      }
    }
})



postDir.controller('postCtrl',function($scope,Restangular,Post)
{
  Post.getPostlist("apiposts").then(function (o){
    $scope.posts = o;
    })
  $scope.add=function(){
    Restangular.all("apiposts").post($scope.newpost).then(function(o){
      Post.getPostlist("apiposts").then(function (oo){
        $scope.posts=oo
        alert("added successfully")
      })
    },
    function(error){
      alert("name already present")
    })
  }
})


postDir.controller('contentCtrl',function ($scope,Restangular,Post)  
{
  $scope.displaycontent=function(id){
  Restangular.one('apiposts',id).get().then(function(u){
    $scope.post=u
    $scope.post.count=u.count+1;
    $scope.post.put();

  Post.getPostlist("apiposts").then(function(posts)
  { 
    Post.totalCount(posts).then(function(success){
      $scope.tc=success
  },
    function(err){
      alert(err)
    })
  })
  })
}
})

postDir.controller('commentCtrl',function ($scope,Restangular,$q,Post){
  
  $scope.viewComments=function(id){
    Restangular.one("apicomments",id).get().then(function (o){
      $scope.comments=o
    })
  }
  $scope.newComments=function(id){
    Restangular.all("apiposts/"+id+"/apicomments").post($scope.newcom).then(function(o) {
    alert("posted successfully")  
            
  },
  function(o){
    alert("Enter the id and comments")
  })
  }
})