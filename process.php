<?php 
require_once 'phpmailer/PHPMailerAutoload.php';

if(isset($_POST['inputName']) && isset($_POST['inputEmail']) && isset($_POST['inputMessage'])){


	//check if any of the inputs are empty
	if(empty($_POST['inputName']) || empty($_POST['inputEmail']) || empty($_POST['inputMessage'])){
		$data = array('success' => false, 'message' => 'Please fill out the form completely.');
		echo json_encode($data);
		exit;
	}

	//create an instance of PHPMailer
	$mail = new PHPMailer();

	$mail->From = $_POST['inputEmail'];
	$mail->FromName = $_POST['inputName'];
	$mail->addAddress('whcarter3@gmail.com'); //receipient
	$mail->Body = "Name: " . $_POST['inputName'] . "\r\n\rMessage: " . stripslashes($_POST['inputMessage']);

	if(isset($_POST['ref'])){
		$mail->Body .= "\r\n\r\nRef: " . $_POST['ref'];
	}

	if(!$mail->send()) {
		$data = array('success' => false, 'message' => 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo);
		echo json_encode($data);
		exit;
	}

	$data = array('success' => true, 'message' => 'Success! Thanks for your message.');
	echo json_encode($data);

} else {
	$data = array('success' => false, 'message' => 'Please fill out the form completely.');
	echo json_encode($data);
}


?>