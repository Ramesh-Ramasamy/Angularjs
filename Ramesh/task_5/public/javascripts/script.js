(function(){
	var app = angular.module('firstApp',['ui.router','restangular','angularUtils.directives.dirPagination']);
		
	app.config(function($stateProvider,$urlRouterProvider,RestangularProvider){		
		RestangularProvider.setBaseUrl('http://localhost:3000/');		
		$stateProvider.state('home',{
			url: '/',		
			views:{ 
				'header@' : {
					templateUrl: "templates/header.html"
				},
				'countries@' : {
					templateUrl: "templates/home.html",
					controller: "homeController"				
				},
				'footer@' : {
					templateUrl: "templates/footer.html"
				}
			}
	    })
	    .state('usersession',{
	    	views :{
	    		'header@' : {
					templateUrl: "templates/header.html"
				},
	    		'countries' : {
	    			templateUrl : "templates/login.html",
	    			controller: function($scope,$stateParams,Restangular,Session,User,$state){
	    				$scope.submit = function(){
	    					Restangular.all("authenticate_user").post($scope.user).then(function(o){
	    						console.log(o);
	    						if(o.username != null){
		    						User.setuser(o.id,o.username);
		    						$state.go("home");
	    						}
	    					})
	    				}
	    			}
	    		},
	    		'footer@' : {
					templateUrl: "templates/footer.html"
				}
	    	}
	    })
	    .state('signup',{
	     	views:{	
	     		'header' : {
					templateUrl: "templates/header.html"
				},    		
	    		'countries' :{
	    			templateUrl: 'templates/user.signup.html',
	    			controller: function($scope,Restangular,User,$state){
	    				$scope.addUser = function(){
	    					if($scope.newuser.password != $scope.newuser.password2){
	    						alert('Password Not Matching');
	    					}else{
		    					Restangular.all("users").post($scope.newuser).then(function(o){
		    						console.log("After then	");
		    						console.log(o);	    					
	    							if(o.username != null){
			    						User.setuser(o.id,o.username);
			    						alert('User Registerd Successfully');
			    						$state.go("home");
		    						}else{
		    							$scope.errors = o[0];
		    						}
		    						
		    					})	
		    				}
	    				} 
	    			}
	    		},
	    		'footer' : {
					templateUrl: "templates/footer.html"
				}
	    		
	    	}	  

	    })
	     .state('dashboard',{
	     	views:{	
	     		'header' : {
					templateUrl: "templates/header.html"
				},    		
	    		'countries' :{
	    			templateUrl: 'templates/dashboard.html',
	    			controller: function($scope,Restangular){	    				
	    				Restangular.all("countrydashboard").getList().then(function(o){
	    					console.log(o);
	    					$scope.countries = o;
	    				})
	    				Restangular.all("userdashboard").getList().then(function(o){
	    					console.log(o);
	    					$scope.users = o;
	    				})
	    				Restangular.all("withcontinents").getList().then(function(o){
	    					console.log(o);
	    					$scope.withcontinents = o;
	    				})
	    				Restangular.all("withoutcontinents").getList().then(function(o){
	    					console.log(o);
	    					$scope.withoutcontinents = o;
	    				})
	    			}
	    		},
	    		'footer' : {
					templateUrl: "templates/footer.html"
				}
	    		
	    	}	  

	    })
	    .state('home.content.comment',{  	
	    	views :{
	    		'home.content.comment' : {
	    			templateUrl : "templates/home.content.comment.html",
	    			controller : function($scope,$stateParams,Restangular,Session,User,$state){
	    				var response = {};	    					
						response.user_id = User.getuser().user_id;						
						response.username = User.getuser().username;	    				
    					if(response.username != null){    						
				        	$scope.session = response;
				        	$scope.postcomments = function(){
		    					$scope.comment.country_id = $stateParams.id;
		    					$scope.comment.user_id = response.user_id;
		    					Restangular.all("countries/"+$stateParams.id+"/comments").post($scope.comment).then(function(o){
		    						$scope.comments.push(o[0]);	    						
		    						console.log(o);
		    						$state.go("home.content");
		    					})
		    				}
    					}
				        else{					        					        	
				        	$state.go("usersession");
				        }	    				
	    			}
	    		}
	    	}
	    })
	    .state('home.content',{
	    	url: ':id',
	    	views :{
	    		'home.content' :{
	    			templateUrl : "templates/home.content.html",
	    			controller : function($scope,$stateParams){    				 			
	    				$scope.viewdetails($stateParams.id);
	    			}
	    		}
	    	}
	    })
	    .state('addCountry',{
	    	
	    	views:{
	    		'header@' : {
					templateUrl: "templates/header.html"
				},
	    		'countries' :{
	    			templateUrl: 'templates/home.addcountry.html',
	    			controller: 'add_country_ctrl'
	    		},
	    		'footer@' : {
					templateUrl: "templates/footer.html"
				}
	    	}	    	
	    });
	});
	app.run(['$state', function ($state) {
	   $state.transitionTo('home');
	}])
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
			getCountryList: function(list){
				return Restangular.all(list).getList()
			}
			
		}
	}]);
	app.controller('homeController',function($scope,Countries,$stateParams,$state,Restangular){		
		Countries.getCountryList("countries").then(function(o){
			$scope.countries = o;
			console.log(o);
		})
		$scope.viewdetails = function(id){

			Countries.getCountryDetails(id).then(function(o){
				$scope.country = o;
				$scope.country.clickcount += 1;				
				$scope.country.put();
			});

			Countries.getCountryList("countries/"+id+"/comments").then(function(o){
				$scope.comments = o;
			})	
		}

	})	
	app.controller('add_country_ctrl',function($scope,$state,Countries){		
		Countries.getCountryList("countries").then(function(o){
			$scope.countries = o;
			console.log(o);
		})
		$scope.save = function(){			
			Countries.addCountryDetails($scope.country).then(function(o){
				$scope.countries.push(o);
				console.log($scope.country)
				$state.go("home");
			})
		} 
	})
})();
