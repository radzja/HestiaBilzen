<?php

$dummyBackend = false;

if ($dummyBackend) {
  $matches = json_decode('[{"code":"QO34","matchDate":"2019-11-04","matchTime":"17:00","homeTeam":"U21-J","awayTeam":"Hb St-Truiden 1","out":"0","sportshallId":"5"},{"code":"QO151","matchDate":"2019-11-05","matchTime":"12:30","homeTeam":"Hb St-Truiden 2","awayTeam":"U21-J","out":"1","sportshallId":"9"},{"code":"QO121","matchDate":"2019-12-07","matchTime":"12:15","homeTeam":"U21-J","awayTeam":"H.I. Hasselt 1","out":"0","sportshallId":"17"},{"code":"QO163","matchDate":"2020-02-01","matchTime":"12:30","homeTeam":"Hb Lummen","awayTeam":"U21-J","out":"1","sportshallId":"5"},{"code":"QO202","matchDate":"2020-02-22","matchTime":"15:15","homeTeam":"U21-J","awayTeam":"Pentagoon Kortessem","out":"0","sportshallId":"10"},{"code":"QO214","matchDate":"2020-03-07","matchTime":"12:30","homeTeam":"Hb Tongeren","awayTeam":"U21-J","out":"1","sportshallId":"25"},{"code":"QM05","matchDate":"2020-04-14","matchTime":"12:30","homeTeam":"U21-J","awayTeam":"Dhc Overpelt 2","out":"0","sportshallId":"24"},{"code":"QM99","matchDate":"2019-04-18","matchTime":"12:15","homeTeam":"Dhc Overpelt 1 ","awayTeam":"U21-J","out":"1","sportshallId":"15"}]');
  echo json_encode($matches);
}
else {
  require_once '../classes/MatchRepository.php';

  header('Access-Control-Allow-Origin: http://localhost:4200');
  header('Content-type: application/json');

  if(isset($_GET['team']) && is_string($_GET['team'])) {
    $matches = MatchRepository::getMatchesByTeam($_GET['team']);
    echo json_encode($matches);
  }
}

?>
