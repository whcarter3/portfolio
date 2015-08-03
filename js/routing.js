(function () {

	'use strict';

	angular
		.module('app')
		.config(config);

		function config ($routeProvider, $locationProvider) {
			$routeProvider

				// route for the home page
				.when('/', {
					templateUrl	: 'views/main.html',
					controller 	: 'mainController'
				})
				// route for work page
				.when('/work', {
					templateUrl	: 'views/work.html',
					controller 	: 'workController'
				})
				// route for resume
				.when('/resume', {
					templateUrl	: 'views/resume.html',
					controller 	: 'resumeController'
				})
				.when('/contact', {
					templateUrl : 'views/contact.html',
					controller 	: 'contactController'
				})
				//route for konami easter egg
				.when('/konami', {
					templateUrl	: 'views/konami.html',
					controller 	: 'konamiController'
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