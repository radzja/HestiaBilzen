<?php

require_once '../classes/MatchRepository.php';

header('Access-Control-Allow-Origin: http://localhost:4200');
header('Content-type: application/json');

if(isset($_GET['team']) && is_string($_GET['team'])) {
  $matches = MatchRepository::getMatchesByTeam($_GET['team']);
  echo json_encode($matches);
}
?>
