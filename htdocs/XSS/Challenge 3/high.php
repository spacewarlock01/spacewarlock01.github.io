<?php
session_start(); 

header ("X-XSS-Protection: 0");

// Is there any input?
$html =  preg_replace( '/<(.*)s(.*)c(.*)r(.*)i(.*)p(.*)t/i', '', $_GET[ 'username' ] );
echo $html;



?>


