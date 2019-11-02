<?php
$dummyBackend = false;

if ($dummyBackend) {
  $matches = json_decode('[{"code":"QO79","matchDate":"2019-11-02","matchTime":"17:00","homeTeam":"U12","awayTeam":"Hannibal Tessenderlo","out":"0","sportshallId":"1"},{"code":"10063","matchDate":"2019-11-02","matchTime":"15:15","homeTeam":"VIOS","awayTeam":"U19-M","out":"1","sportshallId":"1"},{"code":"QO34","matchDate":"2019-11-04","matchTime":"17:00","homeTeam":"U21-J","awayTeam":"Hb St-Truiden 1","out":"0","sportshallId":"5"},{"code":"QO151","matchDate":"2019-11-05","matchTime":"12:30","homeTeam":"Hb St-Truiden 2","awayTeam":"U21-J","out":"1","sportshallId":"9"},{"code":"QO55","matchDate":"2019-11-12","matchTime":"10:30","homeTeam":"Hb Lummen","awayTeam":"M19-M","out":"1","sportshallId":"10"},{"code":"QO94","matchDate":"2019-11-16","matchTime":"11:30","homeTeam":"Pentagoon Kortessem","awayTeam":"M19-M","out":"1","sportshallId":"24"},{"code":"QO106","matchDate":"2019-11-23","matchTime":"11:30","homeTeam":"Hb Tongeren","awayTeam":"M19-M","out":"1","sportshallId":"12"},{"code":"QO112","matchDate":"2019-11-30","matchTime":"14:00","homeTeam":"H.I. Hasselt 2","awayTeam":"M19-M","out":"1","sportshallId":"15"},{"code":"QO121","matchDate":"2019-12-07","matchTime":"12:15","homeTeam":"U21-J","awayTeam":"H.I. Hasselt 1","out":"0","sportshallId":"17"},{"code":"QO142","matchDate":"2020-01-19","matchTime":"14:15","homeTeam":"Hb St-Truiden 1","awayTeam":"M19-M","out":"1","sportshallId":"1"}]');
  echo json_encode($matches);
}
else {
  require_once '../classes/MatchRepository.php';

  header('Access-Control-Allow-Origin: http://localhost:4200');
  header('Content-type: application/json');
  $matches = MatchRepository::getUpcomingMatches();
  echo json_encode($matches);
}
?>
