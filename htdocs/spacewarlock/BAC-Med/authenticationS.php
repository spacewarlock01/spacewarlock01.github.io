<?php      
    include('connection.php');  
    $username = $_POST['username'];  
    $password = $_POST['pass'];  
    $identity = $_POST['identity'];
      
        //to prevent from mysqli injection  
        $username = stripcslashes($username);  
        $password = stripcslashes($password);  
        $identity = stripcslashes($identity);
        $username = mysqli_real_escape_string($con, $username);  
        $password = mysqli_real_escape_string($con, $password);  
       
  
        session_start();

        /* SOME PIECE OF CODE TO AUTHENTICATE THE USER, MOSTLY SQL QUERY... */

        /* now registering a session for an authenticated user */
        $_SESSION['session']=$identity;

       
        $sql = "select id from Student where username = '$username' and password = '$password'";  
        $result = mysqli_query($con, $sql);  
        $row = mysqli_fetch_array($result, MYSQLI_ASSOC);  
        $number = (int) $row['id'];
        $count = mysqli_num_rows($result);
        $str = ".php" ; 
        $fn = strval($number).$str; 
        if($count == 1 ){  
            //echo "<h1><center> Login successful </center></h1>";
            header("Location: http://localhost:9510/Space Warlock/spacewarlock/BAC-Med/Sid=$fn ");
  
        }  
        else{  
            echo "<h1> Login failed. Invalid username or password.</h1>";  
        }     
?> 