<?php
$host="localhost"; // Host name 
$username="migros_db_user"; // Mysql username 
$password="Migros123DB"; // Mysql password 
$db_name="migros_db"; // Database name 
$tbl_name="user"; // Table name

// Connect to server and select databse.
mysql_connect($host, $username, $password)or die("cannot connect"); 
mysql_select_db($db_name)or die("cannot select DB");

// username and password sent from form 
$myusername=$_POST['username']; 
$mypassword=$_POST['password']; 

// To protect MySQL injection (more detail about MySQL injection)
$myusername = stripslashes($myusername);
$mypassword = stripslashes($mypassword);
$myusername = mysql_real_escape_string($myusername);
$mypassword = mysql_real_escape_string($mypassword);
$sql ='SELECT * FROM '.$tbl_name. ' WHERE username="'.$myusername.'" and password="'.$mypassword.'"';

$result=mysql_query($sql);

// Mysql_num_row is counting table row
$row = mysql_fetch_assoc($result);

// If result matched $myusername and $mypassword, table row must be 1 row
if($row){
	$arr = array(
		'status'=>'ok',
		'user'=>array(
			'name'=>$row['id']
		)
	);
}else{
	$arr = array(
		'status'=>'error'
	);
}




echo json_encode($arr);
?>