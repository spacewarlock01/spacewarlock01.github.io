<?php 
session_start();
include "db_conn.php";

if (isset($_SESSION['id']) && isset($_SESSION['username'])) { 
    $result = mysqli_query($conn,"SELECT * FROM names");
    echo "People who will be joining you: <br> " ;
    while($row = mysqli_fetch_array($result))
    {
    
    echo "<tr>";
    // echo "<td> Other Team Members: </td>";
    echo "<td>" . $row['name'] ."<br></td>";
    echo "</tr>";
}
    echo "</table>"; 

//mysqli_close($con);
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
     <h4>Good Luck, <?php echo $_SESSION['username']; ?></h4>
     <h4> flag{Welcome_To_The_Team}</h4>
     
    
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