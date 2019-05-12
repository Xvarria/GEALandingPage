<?php
if(!empty($_POST["send"])) {
	$firstName = $_POST["first-name"];
	$lastName = $_POST["last-name"];
	$email = $_POST["email"];
	$subject = "Formulario de contacto GEA";
	$message = $_POST["message"];

	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	$headers .= 'From: Contacto <noreponsder@gea.co.cr>' . "\r\n";

	$content = "Formulario de contacto \r\n"."Hemos recibido su mensaje, nos estaremos comunicando de vuelta lo más pronto posible. \r\nNombre: ".$firstName."\r\nApellido: ".$lastName."\r\nemail: ".$email."\r\n\r\nMensaje:\r\n".$message;
	
	mail($email, $subject, nl2br($content), $headers);

	if(mail("info@alina.cr, marcosanchav@gmail.com", $subject, nl2br($content), $headers)) {
	    $resultado = "Información de contacto enviada.";
	    $type = "success";
	}else{
		$resultado = "Error enviando la información";
		$type = "error";
	}
}
require_once "contact-us-form.php";
?>