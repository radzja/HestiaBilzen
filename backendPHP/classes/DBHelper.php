<?php
require_once 'DBClass.php';
require_once 'Match.php';
require_once 'MatchRepository.php';
require_once 'SportsHall.php';
require_once 'SportsHallsRepository.php';
require_once 'Player.php';
require_once 'PlayersRepository.php';

class DBHelper {

  public static function resetDB() {
    /*
    DBClass::execute('DROP TABLE matches');
    DBClass::execute('CREATE TABLE matches (
      code VARCHAR(5) PRIMARY KEY,
      matchDate DATE,
      matchTime TIME,
      homeTeam VARCHAR(25),
      awayTeam VARCHAR(25),
      out BIT,
      sportshallId INT)');
    DBClass::execute('CREATE TABLE states (
        name VARCHAR(50),
        code VARCHAR(10)
    )');
    */
  }

  public static function getMatches() {
      $matches = array();
      $db = DBClass::getInstance();
      $db_matches = $db::query('SELECT * FROM matches');
      if(empty($db_matches)) {
        MatchRepository::init();
        $db_matches = $db::query('SELECT * FROM matches');
      }
      foreach ($db_matches as $db_match) {
          $match = new Match($db_match->code, $db_match->matchDate, $db_match->matchTime, $db_match->homeTeam,
                              $db_match->awayTeam, $db_match->out, $db_match->sportshallId);
          array_push($matches, $match);
      }
      return $matches;
  }

  public static function getUpcomingMatches() {
    $matches = array();
    $currentDate = date("Y-m-d");
    $db = DBClass::getInstance();
    $db_matches = $db::query('SELECT * FROM matches WHERE matchDate>=?', array($currentDate));
    foreach ($db_matches as $db_match) {
      // Returns a maximum of 10 upcoming matches
      if(count($matches)<10) {
        $match = new Match($db_match->code, $db_match->matchDate, $db_match->matchTime, $db_match->homeTeam,
                            $db_match->awayTeam, $db_match->out, $db_match->sportshallId);
        array_push($matches, $match);
      }
    }
    return $matches;
  }

  public static function getMatchesByTeam($team) {
    $matches = array();
    $db = DBClass::getInstance();
    $db_matches = $db::query('SELECT * FROM matches WHERE homeTeam="' . $team . '" OR awayTeam="' . $team .'"');
    foreach ($db_matches as $db_match) {
        $match = new Match($db_match->code, $db_match->matchDate, $db_match->matchTime, $db_match->homeTeam,
                            $db_match->awayTeam, $db_match->out,$db_match->sportshallId);
        array_push($matches, $match);
    }
    return $matches;
  }


  public static function getSportsHalls() {
    $sportshalls = array();
    $db = DBClass::getInstance();
    $db_sportshalls = $db::query('SELECT * FROM sportshalls');
    if(empty($db_sportshalls)) {
      SportsHallsRepository::init();
      $db_sportshalls = $db::query('SELECT * FROM sportshalls');
    }
    foreach ($db_sportshalls as $db_sportshall) {
        $sportshall = new SportsHall($db_sportshall->sportshallId, $db_sportshall->name, $db_sportshall->street,
                                    $db_sportshall->city, $db_sportshall->phoneNumber, $db_sportshall->mapsURL, $db_sportshall->club);
        array_push($sportshalls, $sportshall);
    }
    return $sportshalls;
  }

  // public static function getSportsHallById($sportshallId) {
  //   $db_sportshall = DBClass::query('SELECT * FROM sportshalls WHERE sportshallId=?', array($sportshallId));
  //   $sportshall = SportsHall($db_sportshall->sportshallId,$db_sportshall->name,$db_sportshall->street,$db_sportshall->city,$db_sportshall->phoneNumber,$db_sportshall->mapsURL,$db_sportshall->club);
  //   return $db_sportshall;
  // }

  public static function getPlayers() {
    $players = array();
    $db = DBClass::getInstance();
    $db_players = $db::query('SELECT * FROM players');
    if(empty($db_players)) {
      PlayersRepository::init();
      $db_players = $db::query('SELECT * FROM players');
    }
    foreach ($db_players as $db_player) {
      $player = new Player($db_player->playerId, $db_player->stamNr, $db_player->name, $db_player->birthDate, $db_player->team);
      array_push($players, $player);
    }
    return $players;
  }

  public static function getPlayersByTeam($team) {
    $players = array();
    $db = DBClass::getInstance();
    $db_players = $db::query('SELECT * FROM players WHERE team=?', array($team));
    foreach ($db_players as $db_player) {
      $player = new Player($db_player->playerId, $db_player->stamNr, $db_player->name, $db_player->birthDate, $db_player->team);
      array_push($players, $player);
    }
    return $players;
  }

  public static function getPlayersByBirthday($birthDate) {
    $players = array();
    $db = DBClass::getInstance();
    $db_players = $db::query('SELECT * FROM players WHERE birthDate=?', array($birthDate));
    foreach ($db_players as $db_player) {
      $player = new Player($db_player->playerId, $db_player->stamNr, $db_player->name,
                          $db_player->birthDate, $db_player->team);
      array_push($players, $player);
    }
    return $players;
  }

  public static function addMatch(Match $match) {
    $db = DBClass::getInstance();
    $result = $db::execute(
      'INSERT INTO matches (code,matchDate,matchTime,homeTeam,awayTeam,out,sportsHallId) VALUES (?, ?, ?, ?, ?, ?, ?)',
      array($match->code, $match->matchDate, $match->matchTime, $match->homeTeam,
            $match->awayTeam, $match->outMatch, $match->sportshallId));
    return $result;
  }

  public static function addPlayer(Player $player) {
    $db = DBClass::getInstance();
    $result = $db::execute(
      'INSERT INTO players (stamNr,name,birthDate,team) VALUES (?, ?, ?, ?)',
      array($player->stamNr, $player->name, $player->birthDate, $player->team));
    return $result;
  }

  public static function addSportsHall(SportsHall $sportsHall) {
    $db = DBClass::getInstance();
    $result = $db::execute(
      'INSERT INTO sportshalls (name,street,city,phoneNumber,mapsURL,club) VALUES (?, ?, ?, ?, ?, ?)',
      array($sportsHall->name, $sportsHall->street, $sportsHall->city,
            $sportsHall->phoneNumber, $sportsHall->mapsURL, $sportsHall->club));
    return $result;
  }

  public static function uploadFile($file_name,$file_type,$file_size) {
    $db = DBClass::getInstance();
    $result = $db::execute(
      'INSERT INTO file_uploads (file_name,file_type,file_size) VALUES (?, ?, ?)',
      array($file_name, $file_type, $file_size));
    return $result;
  }
}
?>
