<?php

require_once '../classes/PlayersRepository.php';

header('Access-Control-Allow-Origin: http://localhost:4200');
header('Content-type: application/json');

if(isset($_GET['team']) && is_string($_GET['team'])) {
  $players = PlayersRepository::getPlayersByTeam($_GET['team']);
  echo json_encode($players);
}
?>
