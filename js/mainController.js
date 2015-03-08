(function () {
	angular
		.module('app')
		.controller('mainController', mainController);

		function mainController() {
			var self = this;

			self.message = 'Hello World'
		};
})();