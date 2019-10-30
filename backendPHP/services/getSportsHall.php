<?php

require_once '../classes/SportsHallsRepository.php';

header('Access-Control-Allow-Origin: http://localhost:4200');
header('Content-type: application/json');

if(isset($_GET['id']) && is_string($_GET['id'])) {
  $sportsHall = SportsHallsRepository::getSportsHallById($_GET['id']);
  echo json_encode($sportsHall);
}
?>
