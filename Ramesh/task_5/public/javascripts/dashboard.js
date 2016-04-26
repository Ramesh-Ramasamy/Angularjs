var app = angular.module('dashdirectory',['ui.router','restangular','angularUtils.directives.dirPagination']);
app.directive("dashboard",function($compile){
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
		}
		
	};
})
app.controller('Dashboard',function($scope,$http){		
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


