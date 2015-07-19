(function () {

	'use strict';

	angular
		.module('app')
		.config(config);

		function config ($routeProvider, $locationProvider) {
			$routeProvider

				// route for the home page
				.when('/', {
					templateUrl	: 'home.html',
					controller 	: 'mainController'
				})
				// route for work page
				.when('/work', {
					templateUrl	: 'work.html',
					controller 	: 'mainController'
				})
				// route for resume
				.when('/resume', {
					templateUrl	: 'resume.html',
					controller 	: 'mainController'
				})
				//route for konami easter egg
				.when('/konami', {
					templateUrl	: 'konami.html',
					controller 	: 'mainController'
				})
				// route for blog
				// .when('/blog', {
				// 	templateUrl	: 'blog.html',
				// 	controller 	: 'mainController'
				// })
				// capture redirect
				.otherwise({
					redirectTo 	: '/'
				});

			// use the HTML 5 History APi
			$locationProvider.html5Mode(true);
		}
})();