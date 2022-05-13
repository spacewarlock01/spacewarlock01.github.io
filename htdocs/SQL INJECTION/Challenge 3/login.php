<?php 
session_start(); 
include "db_conn.php";

if (isset($_POST['username']) && isset($_POST['password'])) {

	// function validate($data){
    //    $data = trim($data);
	//    $data = stripslashes($data);
	//    $data = htmlspecialchars($data);
	//    return $data;
	// }

	$uname = $_POST['username'];
	$pass = $_POST['password'];

	if (empty($uname)) {
		header("Location: index.php?error=Username is required");
	    exit();
	}else if(empty($pass)){
        header("Location: index.php?error=Password is required");
	    exit();
	}else{
		$sql = "SELECT * FROM users WHERE (username ='".$uname."') AND (password = '".$pass."')"; // 

		if (!mysqli_query($conn,$sql))
		{
			echo 'Error: ' . mysqli_error($conn);
		}else{

		$result = mysqli_query($conn, $sql) ; 
		
		if (mysqli_num_rows($result) != 0) { // === 1
			$row = mysqli_fetch_assoc($result);
            // if ($row['username'] === $uname && $row['password'] === $pass) {
            	$_SESSION['username'] = $row['username'];
            	$_SESSION['name'] = $row['name'];
            	$_SESSION['id'] = $row['id'];
            	header("Location: index.php?error=Admin:flag{you_are_supernova} ");
		        exit();
        //     }else{
		// 		header("Location: index.php?error=Incorrect Username or password");
		//         exit();
		// 	}
		 }else{
			//echo $sql ;
			//echo mysqli_error(mysqli);
		 	header("Location: index.php?error=Incorrect Username or Password. <br>");
	        exit();
	
		}
	}
}
	
}else{
	header("Location: index.php");
	exit();
} 

// admin') -- //