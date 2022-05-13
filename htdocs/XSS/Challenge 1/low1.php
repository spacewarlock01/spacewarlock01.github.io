<?php
session_start(); 
//$identity="flag{Magellanic_Clouds}";
header ("X-XSS-Protection: 0");
//$_SESSION['session']=$identity;
// Is there any input?
$html = $_GET[ 'username' ];
echo $html;


?>



