<?php

require_once '../classes/PlayersRepository.php';

header('Access-Control-Allow-Origin: http://localhost:4200');
header('Content-type: application/json');
$players = PlayersRepository::getPlayers();
echo json_encode($players);

?>
