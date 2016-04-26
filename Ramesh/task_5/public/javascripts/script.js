(function(){
	var app = angular.module('firstApp',['dashdirectory','ui.router','restangular','angularUtils.directives.dirPagination']);
	app.directive("country",function(){
		return {
			restrict: 'E',
			templateUrl: "templates/country.html",
			controller: "homeController"
		};
	})
	.directive("headerApplication",function(){
		return {
			restrict: 'E',
			templateUrl: "templates/header.html"
		};
	})
	.directive("footerApplication",function(){
		return {
			restrict: 'E',
			templateUrl: "templates/footer.html"
		};
	})
	.directive("addNewcountry",function(){
		return {
			require:'^country',
			restrict: 'E',
			templateUrl: 'templates/home.addcountry.html',
			controller: 'add_country_ctrl'
		};
	})
	.directive("countryContent",function(){
		return {			
			restrict: 'E',
			templateUrl: 'templates/home.content.html',
			controller: 'countrycontentctrl'			
		};
	})
	.directive("comments",function(){
		return {
			templateUrl: 'templates/comments.html',			
		}
	})		
	app.factory("Countries",["Restangular",function(Restangular) {
		return {			
			getCountryDetails: function(id){
				return Restangular.one("countries",id).get()
			},
			addCountryDetails: function(link,values){
				return Restangular.all(link).post(values)
			},
			getList: function(list){
				return Restangular.all(list).getList()
			}
			
		}
	}]);
	app.factory("ViewCountryDetails",function($http,$log,$q){
		return {
			CountriesDetails: function(id){
				var deferred = $q.defer();
				$http.get("countries/"+id)
				.success(function(data){
					deferred.resolve(data);
				})
				.error(function(msg,code){
					deferred.reject(msg);
					$log.error(msg,code);
				})
				return deferred.promise;
			} 
		}
	});
	app.controller('homeController',function($scope,Countries,$window){		
		Countries.getList("countries").then(function(o){
			$scope.countries = o;
			console.log(o);
		})		
		$scope.reloadRoute = function() {
		   $window.location.reload();
		}
	})
	app.controller('countrycontentctrl',function($scope,Countries,ViewCountryDetails,Restangular){		
		$scope.viewdetails = function(id){			
			ViewCountryDetails.CountriesDetails(id).then(function(response){				
				$scope.country = response;				
			})			
			Countries.getList("countries/"+id+"/comments").then(function(o){
				$scope.comments = o;
			})	
		}
		$scope.postcomments = function(id){			
			$scope.comment.country_id =	id;			
			$scope.comment.user_id = 17;		
			Countries.addCountryDetails("countries/"+id+"/comments",$scope.comment).then(function(o){
				$scope.comments.push(o[0]);	    						
				console.log(o);				
			})
		}
	})	
	app.controller('add_country_ctrl',function($scope,Countries){	
		$scope.save = function(){			
			Countries.addCountryDetails("countries",$scope.country).then(function(o){
				$scope.countries.push(o);
				console.log($scope.country)				
			})
		} 
	})	
})();
