(function () {
	angular
		.module('app')
		.config(config)
		.run(run);

		function config ($routeProvider, $locationProvider) {
			$routeProvider

				// route for the home page
				.when('/', {
					title		: 'William H. Carter III'
					templateUrl	: 'pages/home.html',
					controller 	: 'mainController'
				})
				// route for work page
				.when('/work', {
					title		: 'Work'
					templateUrl	: 'views/work.html',
					controller 	: 'mainController'
				})
				// route for resume
				.when('/resume', {
					title		: 'Resume'
					templateUrl	: 'views/resume.html',
					controller 	: 'mainController'
				})
				// route for blog
				.when('/blog', {
					title		: 'Blog'
					templateUrl	: 'views/blog.html',
					controller 	: 'mainController'
				})
				// capture redirect
				.otherwise({
					redirectTo 	: '/'
				})
		}

		function run ($location, $rootScope) {

			var changeRoute = function  (event, current, previous) {
				return $rootscope.title = current.$$route.title;
			}

			$rootscope.$on('$routeChangeSuccess', changeRoute);
		}
})();