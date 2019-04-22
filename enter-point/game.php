<?php

require 'PHPMailerAutoload.php';
$mail = new PHPMailer;
$mail->isSMTP();
$mail->CharSet = 'UTF-8';
$mail->Host = 'smtp.gmail.com';
$mail->Port = 587;
$mail->SMTPOptions = array (
    'ssl' => array(
        'verify_peer'  => false,
        'verify_peer_name'  => false,
        'allow_self_signed' => true));
$mail->SMTPAuth = true;
$mail->Username = "maint.analytics@gmail.com";
$mail->Password = "maana2104";
$mail->setFrom('info@maint.kz', 'Maint.kz'); // название
$mail->addAddress('maint.analytics@gmail.com', 'Maint Company');
//$mail->addAddress('kenzhegulov.a@maint.kz', 'Maint Company');
$mail->isHTML(true);

$mes = null;
for($i = 1; $i <= 7; $i++) {
    $name = 'secondq'.$i;
    if ($_POST[$name] != "" AND isset($_POST[$name])) {
        if ($mes == null) {
            $mes = $_POST[$name];
        } else {
            $mes .= ", ".$_POST[$name];
        }
    }
}
$mail->Subject = 'Заполнен quiz на сайте Maint Marketing Brandbook';
$mail->Body    = "<html>
			<head>
				<meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>
			</head>
			<body>
			    <b>Телефон:</b>".$_POST['game_phone']." <br>
				<b>Сфера деятельности компании: </b>".$_POST['firstq']."<br/>
				<b>Спектр услуг для создания лендинга: <br>  </b>".$mes." <br/>
				<b>Источник:</b> ".$_POST['source']."<br/>
				<b>Ключевик: </b>".$_POST['keyword']."<br/>
				<b>Новый сайт:</b> ".$_POST['link']."
			</body>
			</html>";
$mail->AltBody = 'This is a plain-text message body';

if (!$mail->send()) {
    exit("Mailer Error: " . $mail->ErrorInfo);
}
?>
