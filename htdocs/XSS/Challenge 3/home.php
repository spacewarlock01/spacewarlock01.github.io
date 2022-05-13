<?php 
session_start();
include "db_conn.php";



//mysqli_close($con);
 ?>
<!DOCTYPE html>
<html>
<head>
	<title>HOME</title>
	<style>
        button{
            float: right ;
            padding: 10px 15px;
            margin-right : 600px;
            margin-bottom: 250 px;
        }
    </style>
</head>
<body>
     <?php echo $result; ?>
    
     
    
     <form action = "logout.php">
     <button type = "submit"> Logout </button>
    </form>
     <!-- <a href="logout.php">Logout</a> -->
</body>
</html>

<?php 
}else{
     header("Location: index.php");
     exit();
}
 ?>