<?php
session_start(); 

header ("X-XSS-Protection: 0");

// Is there any input?
$html =  str_replace( '<script>', '', $_GET[ 'username' ] );
echo $html;



?>


