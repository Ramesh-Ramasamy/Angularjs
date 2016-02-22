angular.module("components",[])
	.directive('helloWorld',function(){
		return {
			restrict : 'E',
			template :'<span>Helloworld</span><h1>Hi</h1>'
		}
	})

angular.module("myApp",['components'])
