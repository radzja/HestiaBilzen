<?php
require_once 'classes/DBClass.php';
$testDB = new DBClass;
echo '<style>html { margin: 14px; font: 17px Segoe UI } p b { font-weight: 700 }</style>';
echo 'DB_CONNECTIONSTRING:  ' . $testDB::getCONNECTIONSTRING();

echo '<p style="position: absolute; bottom: 10px; padding-left: 5px; font: 16px Consolas;">Current PHP version:  <b>v' . phpversion() . '</b>';
?>
