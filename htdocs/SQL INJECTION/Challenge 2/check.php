<?php 
session_start(); 
include "db_conn.php";

if (isset($_POST['username'])) {

	// function validate($data){
    //    $data = trim($data);
	//    $data = stripslashes($data);
	//    $data = htmlspecialchars($data);
	//    return $data;
	// }

	$uname = $_POST['username'];
	//$pass = $_POST['password'];

	if (empty($uname)) {
		header("Location: index.php?error=Username is required");
	    exit();
	}else{
		$sql = "SELECT * FROM names WHERE name = '".$uname."' ";  
		
	
			if (!mysqli_query($conn,$sql))
			{
				echo 'Error: ' . mysqli_error($conn);
			}else{

		$result = mysqli_query($conn, $sql);
		
		if (mysqli_num_rows($result) != 0) { // === 1
			$row = mysqli_fetch_assoc($result);
            // if ($row['username'] === $uname && $row['password'] === $pass) {
            	$_SESSION['username'] = $row['name'];
            	//$_SESSION['name'] = $row['name'];
            	$_SESSION['id'] = $row['id'];
            	
                header("Location: home.php");
		        exit();
        //     }else{
		// 		header("Location: index.php?error=Incorect Username or password");
		//         exit();
		// 	}
		 }else{
			//echo $sql ;
            header("Location: index.php?error=No, You are not a part of Mars Mission. <br>");
	         exit();
		}
	}
}
	
}else{
	header("Location: index.php");
	exit();
} 

