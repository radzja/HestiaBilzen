<?php

require_once '../classes/PlayersRepository.php';

header('Access-Control-Allow-Origin: http://localhost:4200');
header('Content-type: application/json');

if(isset($_GET['birthDate']) && is_string($_GET['birthDate'])) {
  $players = PlayersRepository::getPlayersByBirthday($_GET['birthDate']);
  echo json_encode($players);
}
?>
