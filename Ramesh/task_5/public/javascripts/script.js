(function(){
	var app = angular.module('firstApp',['ui.router','restangular','angularUtils.directives.dirPagination']);
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
	.directive("dashboard",function($compile){
		return {
			restrict: 'EA',
			controller: 'Dashboard',
			link:function(scope,element,attrb){
			  element.bind("click", function () {
              var html = "<div ng-include src=\"'templates/dashboard.html'\"></div>"
              var templateGoesHere = angular.element(document.getElementsByClassName('row'));
              templateGoesHere.html(html);
              $compile(templateGoesHere)(scope);
              scope.$apply();
			  })
			},
			
		};
	})	
	.config(function($stateProvider,$urlRouterProvider,RestangularProvider){		
		// RestangularProvider.setBaseUrl('http://localhost:3000/');		
		// $stateProvider.state('usersession',{
	 //    	views :{
	 //    		'header@' : {
		// 			templateUrl: "templates/header.html"
		// 		},
	 //    		'countries' : {
	 //    			templateUrl : "templates/login.html",
	 //    			controller: function($scope,$stateParams,Restangular,Session,User,$state){
	 //    				$scope.submit = function(){
	 //    					Restangular.all("authenticate_user").post($scope.user).then(function(o){
	 //    						console.log(o);
	 //    						if(o.username != null){
		//     						User.setuser(o.id,o.username);
		//     						$state.go("home");
	 //    						}
	 //    					})
	 //    				}
	 //    			}
	 //    		},
	 //    		'footer@' : {
		// 			templateUrl: "templates/footer.html"
		// 		}
	 //    	}
	 //    })
	 //    .state('signup',{
	 //     	views:{	
	 //     		'header' : {
		// 			templateUrl: "templates/header.html"
		// 		},    		
	 //    		'countries' :{
	 //    			templateUrl: 'templates/user.signup.html',
	 //    			controller: function($scope,Restangular,User,$state){
	 //    				$scope.addUser = function(){
	 //    					if($scope.newuser.password != $scope.newuser.password2){
	 //    						alert('Password Not Matching');
	 //    					}else{
		//     					Restangular.all("users").post($scope.newuser).then(function(o){
		//     						console.log("After then	");
		//     						console.log(o);	    					
	 //    							if(o.username != null){
		// 	    						User.setuser(o.id,o.username);
		// 	    						alert('User Registerd Successfully');
		// 	    						$state.go("home");
		//     						}else{
		//     							$scope.errors = o[0];
		//     						}		    						
		//     					})
		//     				}
	 //    				} 
	 //    			}
	 //    		},
	 //    		'footer' : {
		// 			templateUrl: "templates/footer.html"
		// 		}
	    		
	 //    	}	  

	 //    })	    
	 //    .state('home.content.comment',{  	
	 //    	views :{
	 //    		'home.content.comment' : {
	 //    			templateUrl : "templates/home.content.comment.html",
	 //    			controller : function($scope,$stateParams,Restangular,Session,User,$state){
	 //    				var response = {};	    					
		// 				response.user_id = User.getuser().user_id;						
		// 				response.username = User.getuser().username;	    				
  //   					if(response.username != null){    						
		// 		        	$scope.session = response;
		// 		        	$scope.postcomments = function(){
		//     					$scope.comment.country_id = $stateParams.id;
		//     					$scope.comment.user_id = response.user_id;
		//     					Restangular.all("countries/"+$stateParams.id+"/comments").post($scope.comment).then(function(o){
		//     						$scope.comments.push(o[0]);	    						
		//     						console.log(o);
		//     						$state.go("home.content");
		//     					})
		//     				}
  //   					}
		// 		        else{					        					        	
		// 		        	$state.go("usersession");
		// 		        }	    				
	 //    			}
	 //    		}
	 //    	}
	 //    })	    	   
	});	
	app.factory('User',function(Session){
		var user = {}
		Session.then(function(o){
			user = o;
		});
		return{			
			getuser : function(){
				return user;
			},
			setuser : function(id,name){
				user.user_id = id;
				user.username = name;
			}

		}
	});
	app.factory('Session', function($http) {		
	    return $http.get('/userdetails').then(function(result) {       	    	
	        return result.data; 
	    });
	}); 
	app.factory("Countries",["Restangular",function(Restangular) {
		return {			
			getCountryDetails: function(id){
				return Restangular.one("countries",id).get()
			},
			addCountryDetails: function(country){
				return Restangular.all("countries").post(country)
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
			alert(id);
			ViewCountryDetails.CountriesDetails(id).then(function(response){				
				$scope.country = response;
				// console.log(response);
				// alert($scope.country.clickcount);
				// $scope.country.clickcount += 1;				
				// $scope.country.put();
			})				
			// countryid = id;
			// Countries.getCountryDetails(id).then(function(o){
				
			// });
			Countries.getList("countries/"+id+"/comments").then(function(o){
				$scope.comments = o;
			})	
		}
		$scope.postcomments = function(id){			
			$scope.comment.country_id =	id;			
			$scope.comment.user_id = 17;		
			Restangular.all("countries/"+id+"/comments").post($scope.comment).then(function(o){
				$scope.comments.push(o[0]);	    						
				console.log(o);				
			})
		}
	})	
	app.controller('add_country_ctrl',function($scope,Countries){	
		$scope.save = function(){			
			Countries.addCountryDetails($scope.country).then(function(o){
				$scope.countries.push(o);
				console.log($scope.country)				
			})
		} 
	})

	// app.factory('NameService', function($http, $q) {

	//     //    Create a class that represents our name service.
	//     function NameService() {
	    
	//         var self = this;
	        
	//         //    Initially the name is unknown....
	//         self.name = null;
	          
	//         //    getName returns a promise which when fulfilled returns the name.
	//         self.getName = function() {
	            
	//             //    Create a deferred operation.
	//             var deferred = $q.defer();
	            
	//             //    If we already have the name, we can resolve the promise.
	//             if(self.name !== null) {
	//                 deferred.resolve(self.name + " (from Cache!)");
	//             } else {
	//                 //    Get the name from the server.
	//                 $http.post('/echo/json/', fiddleResponse, fiddleHeaders)
	//                 .success(function(response) {
	//                     self.name = response.name;
	//                     deferred.resolve(response.name + " (from Server!)");
	//                 })
	//                 .error(function(response) {
	//                     deferred.reject(response);
	//                 });
	//             }
	            
	//             //    Now return the promise.
	//             return deferred.promise;
	//         };
	//     }
	    
	//     return new NameService();
	// });	
	app.controller('Dashboard',function($scope,$http){		
		// Countries.getList("countrydashboard").then(function(o){							
		// 	$scope.countrydashboard = o;
		// })
		// Countries.getList("userdashboard").then(function(o){							
			// 	$scope.users = o;
		// })
		// Countries.getList("withcontinents").then(function(o){							
		// 	$scope.withcontinents = o;
		// })
		// Countries.getList("withoutcontinents").then(function(o){							
		// 	$scope.withoutcontinents = o;
		// })		
		$http.get('/countrydashboard').then(function(response){			
			$scope.countrydashboard = response.data;
			return $http.get('/userdashboard');		
		}).then(function(response){
			$scope.users = response.data;
			return $http.get('/withcontinents');
		}).then(function(response){
			$scope.withcontinents = response.data;
			return $http.get('/withoutcontinents');
		}).then(function(response){
			$scope.withoutcontinents = response.data;			
		})

	})
})();
