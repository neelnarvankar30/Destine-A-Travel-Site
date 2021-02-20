<?php

$FName = filter_input(INPUT_POST, 'Fname');
$LName = filter_input(INPUT_POST ,'Lname');
if (!empty($FName)) {
	if (!empty($LName)) {

	$host="localhost";
	$dbusername="root";
	$dbpassword="";
	$dbnmae="test";


	$conn = new mysqli ($host, $dbusername, $dbpassword, $dbnmae);
	if (mysqli_connect_error()) {

		die('Conncet error('.mysqli_connect_errno().')' . mysqli_connect_error());
			
		}	


		else{

			$sql = "INSERT INTO testtable (Fname,Lname)
			values('$FName','$LName')";

			if ($conn->query($sql)) {
				echo "new record inserted";
			}

			else{

				echo "Error". $sql ."<br>". $conn->error;
			}

			$conn->close();
		}
		
	}
	else{

		echo "Last name shoud not be empty";
		die();
	}
} else{

	echo "First name should not be empty";
	die();
}



?>