<?php
require_once 'DBHelper.php';
require_once 'Match.php';
require_once 'SportsHall.php';

class MatchRepository {

  public static function init() {
    DBHelper::resetDB();
    $matches = array();
    DBHelper::addMatch(new Match('QM104','26-10-19','14:30','HC MAASMECHELEN','U13-M',1,17)); // 17 = Sporthal de Kommel,Olympialaan 4,3630 Maasmechelen
    DBHelper::addMatch(new Match('10062','26-10-19','17:00','U19-M','MARGRATEN',0,1)); // 1 = Sporthal de Kimpel,Eikenlaan 25,3740 Bilzen
    DBHelper::addMatch(new Match('QO79','02-11-19','17:00','U12','Hannibal Tessenderlo',0,1)); // 1 = Sporthal de Kimpel,Eikenlaan 25,3740 Bilzen
    DBHelper::addMatch(new Match('10063','02-11-19','15:15','VIOS','U19-M',1,1)); // Weet locatie niet, vermoed in bilzen: 1 = Sporthal de Kimpel,Eikenlaan 25,3740 Bilzen

    /*
    DBHelper::addCountry(
      new Country('Belgium', 'be',
        array(new State('Limburg'), new State('Vlaams-Brabant'))));
    */
  }

  public static function getMatches() {
    return DBHelper::getMatches();
  }

  public static function getMatch($matchCode) {
    $matches = DBHelper::getMatches();
    $match = array_filter($matches, function($val) use ($matchCode) {
      return $val->code === $matchCode;
    });
    if(count($match) === 1) {
      $match = array_shift($match);
      //$match->homeTeam = DBHelper::getStates($match);
      return $match;
    }
  }

  public static function addMatch($code, $matchDate, $matchTime, $homeTeam, $awayTeam, $out, $sportsHallId) {
    return DBHelper::addMatch(new Match($code, $matchDate, $matchTime, $homeTeam, $awayTeam, $out, $sportsHallId));
  }
}

?>
