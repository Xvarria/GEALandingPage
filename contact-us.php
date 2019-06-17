<?php
	if(isset($_POST['form_submitted'])) {
		$opts = array('http' =>
			array(
				'method'  => 'POST',
				'header'  => 'Content-Type: application/json',
				'content' => ''
			)
		);
		$token = $_POST["tokenOut"];
		$context  = stream_context_create($opts);
		$secretKey = "6LelJakUAAAAAA5_ixUUaDNz7ZeyJ89zNLFsLoe3";
		
		$ip = $_SERVER['REMOTE_ADDR'];
		$url = 'https://www.google.com/recaptcha/api/siteverify';
		$data = array('secret' => $secretKey, 'response' => $token);
	  
		$options = array(
		  'http' => array(
			'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
			'method'  => 'POST',
			'content' => http_build_query($data)
		  )
		);
		$context  = stream_context_create($options);
		$response = file_get_contents($url, false, $context);
		$responseKeys = json_decode($response,true);
		$score = $responseKeys["score"];
		if($responseKeys["success"]) {
			
			//Si la repuesta del reCaptcha es correcta realiza en envío por correo
			$firstName = $_POST["first-name"];
			$lastName = $_POST["last-name"];
			$email = $_POST["email"];
			$subject = "Formulario de contacto GEA";
			$message = $_POST["message"];
		
			$headers  = 'MIME-Version: 1.0' . "\r\n";
			$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
			$headers .= 'From: Contacto <noreponsder@gea.co.cr>' . "\r\n";
		
			$content = "Formulario de contacto \r\n"."Hemos recibido su mensaje, nos estaremos comunicando de vuelta lo m&aacute;s pronto posible. \r\nNombre: ".$firstName."\r\nApellido: ".$lastName."\r\nemail: ".$email."\r\n\r\nMensaje:\r\n".$message;
			$contentInternal = $content."\r\n Score por reCaptcha v3: ".$score;
			mail($email, $subject, nl2br($content), $headers);
			if(mail("info@alina.cr, marcosanchav@gmail.com", $subject, nl2br($contentInternal), $headers)) {
				$resultado = "Informaci&oacute;n de contacto enviada.";
				$type = "success";
			}else{
				$resultado = "Error enviando la informaci&oacute;n";
				$type = "error";
			}
					
		} else {
		
			$type= "error";
		}		
	}

	require_once "contact-us-form.php";
?>