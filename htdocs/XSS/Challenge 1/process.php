
<?php 
session_start(); 
include "db_conn.php";

    if(isset($_POST['btn-send']))
    {
       $UserName = $_POST['UName'];
       //$Email = $_POST['Email'];
       $Subject = $_POST['Subject'];
       $Msg = $_POST['msg'];

       if(empty($UserName) || empty($Subject) || empty($Msg))
       {
           header('location:index.php?error');
       }
       else
       {

        $xss = "INSERT INTO message ( Username , Message ) VALUES ( '$UserName', '$Msg' );";
        
        //$to = "";

           //if(mail($Subject,$Msg,$Email))
           //{
               header("location:index1.php?success=".$Msg);
           //}
       }
    }
    else
    {
        header("location:index1.php");
    }
?>