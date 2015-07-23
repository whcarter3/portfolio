(function () {
	angular
		.module('app')
		.controller('contactController', contactController);

		function contactController($http) {
			var self = this;

			//test
			self.msg = 'contact World';

			//contact contoller scoped available values
			self.result 				= 'hidden';
			self.resultMessage;
			self.formData; //object holding everything submitted by the form
			self.submitButtonDisabled	= false;
			self.submitted 				= false; //so form errors are only shown after submitted
			self.submit 				= submit;

			function submit(contactform, event){
				self.submitted 				= true;
				self.submitButtonDisabled	= true;
				if(contactform.$valid){
					$http({
						method	: 'POST',
						url		: '../process.php',
						data 	: $.param(self.formData), //param method from jQuery
						headers	: { 'Content-Type' : 'application/x-www-form-urlencoded' }
					})
					.success(function(data){
						console.log(data)
						if(data.success){//returns the json object
							self.submitButtonDisabled 	= true;
							self.resultMessage 			= data.message;
							self.result 				= 'alert alert-success';
						} else {
							self.submitButtonDisabled	= false;
							self.resultMessage			= data.message;
							self.result 				= 'alert alert-danger';
						}
					});
				} else {
					self.submitButtonDisabled	= false;
					self.resultMessage			= data.messge;
					self.result 				= 'alert alert-danger';
				}
				event.preventDefault();
			}
		};
})();