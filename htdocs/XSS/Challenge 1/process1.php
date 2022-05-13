<?php

session_start(); 
include "db_conn.php";

if( isset( $_POST[ 'send' ] ) ) {
	$message = $_POST[ 'message' ] ;
	$name    = $_POST[ 'username' ] ;

	$name = str_replace( '<script>', '', $name );

	
	$sql  = "INSERT INTO 'message1'('Username', 'Message') VALUES ('$name','$message')";
	$result = mysqli_query($conn,$sql) ;

	echo $result ;



	//mysql_close();

}

?>