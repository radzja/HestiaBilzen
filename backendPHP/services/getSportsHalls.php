<?php

require_once '../classes/SportsHallsRepository.php';

header('Access-Control-Allow-Origin: http://localhost:4200');
header('Content-type: application/json');
$sportshalls = SportsHallsRepository::getSportsHalls();
echo json_encode($sportshalls);

?>
