<?php
require_once 'DBHelper.php';
require_once 'Player.php';

class PlayersRepository {

  public static function init() {
    /*
    DBHelper::resetDB();
    $matches = array();
    DBHelper::addMatch(new Match('QM104','26-10-19','14:30','HC MAASMECHELEN','U13-M',1,17)); // 17 = Sporthal de Kommel,Olympialaan 4,3630 Maasmechelen
    DBHelper::addMatch(new Match('10062','26-10-19','17:00','U19-M','MARGRATEN',0,1)); // 1 = Sporthal de Kimpel,Eikenlaan 25,3740 Bilzen
    DBHelper::addMatch(new Match('QO79','02-11-19','17:00','U12','Hannibal Tessenderlo',0,1)); // 1 = Sporthal de Kimpel,Eikenlaan 25,3740 Bilzen
    DBHelper::addMatch(new Match('10063','02-11-19','15:15','VIOS','U19-M',1,1)); // Weet locatie niet, vermoed in bilzen: 1 = Sporthal de Kimpel,Eikenlaan 25,3740 Bilzen
    */
  }

  public static function getPlayers() {
    return DBHelper::getPlayers();
  }

  public static function getPlayersByBirthday($birthDate) {
    return DBHelper::getPlayersByBirthday($birthDate);
  }

  public static function getPlayersByTeam($team) {
    return DBHelper::getPlayersByTeam($team);
  }

  public static function addPlayer($playerId, $birthDate, $team) {
    return DBHelper::addPlayer(new Player($playerId, $birthDate, $team));
  }
}

?>
