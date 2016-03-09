/*angular.module("components",[])
	.directive('helloWorld',function(){
		return {
			restrict : 'E',
			scope:{
				name:'@'
			},			
			templateUrl :'partial/testhtml.html'
		}
	})

angular.module("myApp",['components'])*/
var app = angular.module("myApp",['ngRoute']);
app.controller('hi',function($scope){
	$scope.alerting = function(){
		alert('hello');
	}
	$scope.message = "Hello";
});
app.directive("phone",function(){
	return {
		transclude:true,
		scope:{
			dial:"&"
		},
		template:"<button  ng-transclude>Click Me</button>"
	}
});
app.config(function($routeProvider){
	$routeProvider.when('/',{
		template:"<input type='text' value='RAmesh'/>"
	})
});
