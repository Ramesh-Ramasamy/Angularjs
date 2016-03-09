(function(){
	var app = angular.module('firstApp',['ui.router','restangular']);
	app.config(function($stateProvider,$urlRouterProvider,RestangularProvider){
		RestangularProvider.setRestangularFields({
  		"options": "restangularOptions"
		});
		RestangularProvider.setBaseUrl('http://localhost:3000/');		
		$stateProvider.state('post',{			           
      templateUrl: 'partials/partials-home.html',
      controller: 'postCtrl'                       
    })
    .state('update',{
    	url:"update/:id",
    	templateUrl:"partials/partials-edit.html",
    	controller: "updateCtrl"
    })
    .state('add',{			
			templateUrl:"partials/partials-add.html",
			controller: "addCtrl" 
		})
		.state('delete',{
			url:"delete/:id",		
			template:"Successfully Deleted",
			controller: "deleteCtrl" 
		})
		.state('view',{
			url:"view/:id",
			templateUrl:"partials/partials-view.html",
			controller: "viewCtrl" 
		});
		$urlRouterProvider.otherwise('/');
	});
	app.controller('postCtrl',['$scope', 'Restangular','$state',function(scope,Rest,state){
		Rest.all('details').getList().then(function(o){
			
			scope.details=o;
			console.log(scope.details);
		})
		scope.del = function(deletepost){

				scope.details = _.without(scope.details,deletepost);			
		}
	}])
	app.controller('addCtrl',['$scope', 'Restangular','$stateParams','$state',function(scope,Rest,params,state){
		Rest.all('details').getList().then(function(o){
			//o = Rest.stripRestangular(o);
			scope.details=o;
			console.log(scope.details);
		})
		scope.save = function(){			
			Rest.all("details").post(scope.newpost).then(function(o){
				scope.details.push(o);
				state.go('post');
			})
		}
	}])
	app.controller('viewCtrl',['$scope', 'Restangular','$stateParams','$state',function(scope,Rest,params,state){
		Rest.one("details/"+params.id).get().then(function(o){
			scope.det=o;
			console.log(o);
		})
	}])
	app.controller('updateCtrl',['$scope', 'Restangular','$stateParams','$state',function(scope,Rest,params,state){
		Rest.one("details/"+params.id).get().then(function(o){
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
	app.controller('deleteCtrl',['$scope', 'Restangular','$stateParams','$state',function(scope,Rest,params,state){
		
		Rest.one("details/"+params.id).remove();
	}])	
})();