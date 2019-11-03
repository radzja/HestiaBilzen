<?php
include '../config.php';

if ($dummyBackend) {
  $matches = json_decode('{"code":"10063","matchDate":"2019-11-02","matchTime":"15:15","homeTeam":"VIOS","awayTeam":"U19-M","out":"1","sportshallId":"1"}');
  echo json_encode($matches);
}
else {
  require_once '../classes/MatchRepository.php';

  header('Access-Control-Allow-Origin: http://localhost:4200');
  header('Content-type: application/json');

  if(isset($_GET['code']) && is_string($_GET['code'])) {
    $match = MatchRepository::getMatch($_GET['code']);
    echo json_encode($match);
  }
}
?>
