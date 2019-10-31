<?php

header('Access-Control-Allow-Origin: http://localhost:4200');
//header('Content-type: application/json');

require_once '../classes/DBHelper.php';

//if(isset($_POST['btn-upload']))
//if(!empty($_POST["docs"]))
if(array_key_exists('submit', $_POST)) {
  $file_name = rand(100,1000)."-".$_FILES['file']['name'];
  $file_loc = $_FILES['file']['tmp_name'];
  $file_size = $_FILES['file']['size'];
  $file_type = $_FILES['file']['type'];
  $folder="../uploads/";

  move_uploaded_file($file_loc,$folder.$file_name);
  DBHelper::uploadFile($file_name,$file_type,$file_size);
}
?>
