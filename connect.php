<?php

define('DB_NAME', 'userlogin');
define('DB_USER', 'root');
define('DB_PASSWORD', '');
define('DB_HOST', 'localhost');

$link = mysql_connect(DB_HOST,DB_USER,DB_PASSWORD);

if (!$link)
{
	
die('could not connect msq:l' . mysql_error());

}


$db_selected = mysql_select_db(DB_NAME , $link );


if (! $db_selected)
{
	
die('could not use database' . mysql_error());
}
  
  $Name =$_POST['Name']

  $email = $_POST['email'];

  $pass = $_POST['pass'];
 
$Name = stripcslashes($Name);
$email= stripcslashes($email)
$pass = stripcslashes($pass);

$Name = mysql_real_escape_string($Name)
$email = mysql_real_escape_string($email);
$pass = mysql_real_escape_string($pass);



 $result = mysql_query("Select * FROM RECORDS WHERE email = '$email' and pass = '$pass'  ")
or die("Failed".mysql_error());
$row = mysql_fetch_array($result);

mysql_close();




if($row['email'] == $email & $row['pass'] == $pass )
{   
	header('Location:index.html',true);
    //exit();

}
else
{
  
  echo("Failed to Login!!");
  header('Location:login.html',true);
}




?>