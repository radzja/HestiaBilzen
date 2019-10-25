<?php

require_once '../classes/MatchRepository.php';

header('Access-Control-Allow-Origin: http://localhost:4200');
header('Content-type: application/json');

if(isset($_GET['code']) && is_string($_GET['code'])) {
  $match = MatchRepository::getMatch($_GET['code']);
  echo json_encode($match);
}
?>
