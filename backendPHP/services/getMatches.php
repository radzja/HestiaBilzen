<?php

require_once '../classes/MatchRepository.php';

header('Access-Control-Allow-Origin: http://localhost:4200');
header('Content-type: application/json');
$matches = MatchRepository::getMatches();
echo json_encode($matches);

?>