<?php      
    include('connection.php');  
    $username = $_POST['user'];  
    $password = $_POST['pass'];
    $S_Id = $_POST['sessionid'];  
      
        //to prevent from mysqli injection  
        $username = stripcslashes($username);  
        $password = stripcslashes($password);
        $S_Id = stripcslashes($S_Id);
        //$username = mysqli_real_escape_string($con, $username);  
        //$password = mysqli_real_escape_string($con, $password);
        $S_Id = mysqli_real_escape_string($con,$S_Id);  
        $count = 0;
        $sql = "select * from session where sessionid = '$S_Id'";  
        $result = mysqli_query($con, $sql);  
        $row = mysqli_fetch_assoc($result);  
        $count = mysqli_num_rows($result);  
          
        if($count == 1){  
            echo "<h1><center> Login successful </center></h1>";
            echo "<h1><center> great job!... Here's Yoour flag </center></h1>";
            echo "<h4><center> The closest planet to the Sun </center></h4>"; 
            echo "<h4><center> Mercury </center></h4>";  
        }  
        else{  
            echo "<h1> Login failed. Invalid username or password.</h1>";  
        }     
?> 