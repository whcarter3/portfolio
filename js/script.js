$(document).ready(function  () {
	
	init();

	function init(){
		konamiCode();
		// formSubmit();
	}

	function konamiCode(){
		//empty array to push entered keys
		var kkeys 	= [],
		//keys required for konami code
			konami 	= "38,38,40,40,37,39,37,39,66,65";

		//on keydown event do...
		$(document).keydown(function(e){
			//push entered keys keycode into kkeys
			kkeys.push( e.keyCode );

			// if keys matches konami code...
			if (kkeys.toString().indexOf( konami ) >= 0){
				$(document).unbind('keydown', arguments.callee);

				//redirect to /konami
				window.location.href = '/konami';
			}
		});
	};

	// function formSubmit(){
		
	// 	//when form has been submitted
	// 	$('form').submit(function(event){
			
	// 		//remove post errors
	// 		$('#name-group').removeClass('has-error');
	// 		$('#name-group .help-block').empty();
	// 		$('#email-group').removeClass('has-error');
	// 		$('#email-group .help-block').empty();
	// 		$('#name-group').removeClass('has-error');
	// 		$('#name-group .help-block').empty();
	// 		$('#message-group').removeClass('has-error');
	// 		$('#message-group .help-block').empty();

	// 		//remove success messages
	// 		$('#messages').removeClass('alert alert-success').empty();

	// 		//grab form data
	// 		var formData = {
	// 			'name'		: $('input[name=name]').val(),
	// 			'email'		: $('input[name=email]').val(),
	// 			'message'	: $('textarea[name=message]').val()
	// 		}

	// 		//process form
	// 		$.ajax({
	// 			type		: 'POST',
	// 			url			: 'process.php',
	// 			data 		: formData,
	// 			dataType	: 'json',
	// 			success		: function(data){

	// 				//log data to the console so I can see what is submitted
	// 				console.log(data);

	// 				//add error class to show red input and error message if submit fails
	// 				if( ! data.success){

	// 					if(data.errors.name){
	// 						$('#name-group').addClass('has-error');
	// 						$('#name-group .help-block').html(data.errors.name);
	// 					}

	// 					if(data.errors.email){
	// 						$('#email-group').addClass('has-error');
	// 						$('#email-group .help-block').html(data.errors.email);
	// 					}

	// 					if(data.errors.message){
	// 						$('#message-group').addClass('has-error');
	// 						$('#message-group .help-block').html(data.errors.message);
	// 					}
	// 				} else {

	// 					//if validated add success message
	// 					$('#messages').addClass('alert alert-success').append('<p>' + data.message + '</p>');
	// 				}
	// 			}
	// 		});
			
	// 		//stop form from submitting and refreshing
	// 		event.preventDefault();
	// 	});
	// };
});