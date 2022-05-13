<?php 
session_start();

if (isset($_SESSION['id']) && isset($_SESSION['username'])) {

 ?>
<!DOCTYPE html>
<html>
<head>
	<title>HOME</title>
	<style>
        button{
            float: center ;
            padding: 10px 15px;
            margin-bottom: 250 px;
        }
    </style>
</head>
<body style="background-image: url(images/bg2.jpg); text-align: center; margin-top: 200px">
     <h1>Hello, <?php echo $_SESSION['name']; ?></h1>
     <h4> flag{bang_0n_y0u_did_it}</h4>
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