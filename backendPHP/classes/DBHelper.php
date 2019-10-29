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
      $db_matches = DBClass::query('SELECT * FROM matches');
      if(empty($db_matches)) {
        MatchRepository::init();
        $db_matches = DBClass::query('SELECT * FROM matches');
      }
      foreach ($db_matches as $db_match) {
          $match = new Match($db_match->code,$db_match->matchDate,$db_match->matchTime,$db_match->homeTeam,$db_match->awayTeam,$db_match->out,$db_match->sportshallId);
          array_push($matches, $match);
      }
      return $matches;
  }

  public static function getMatchesByTeam($team) {
    $matches = array();
    $db_matches = DBClass::query('SELECT * FROM matches WHERE homeTeam=? OR awayTeam=?', array($team,$team));
    foreach ($db_matches as $db_match) {
      $match = Match($db_match->code,$db_match->matchDate,$db_match->matchTime,$db_match->homeTeam,$db_match->awayTeam,$db_match->out,$db_match->sportshallId);
      array_push($matches, $match);
    }
    return $matches;
  }

  public static function getUpcomingMatches() {
    $matches = array();
    $currentDate = date(d-m-y);
    $db_matches = DBClass::query('SELECT * FROM matches WHERE matchDate>=?', array($currentDate));
    foreach ($db_matches as $db_match) {
      // Return a maximum of 7 upcoming matches
      if(count($matches)<7) {
        $match = Match($db_match->code,$db_match->matchDate,$db_match->matchTime,$db_match->homeTeam,$db_match->awayTeam,$db_match->out,$db_match->sportshallId);
        array_push($matches, $match);
      }
    }
    return $matches;
  }

  public static function getPlayers() {
    $players = array();
    $db_players = DBClass::query('SELECT * FROM players');
    foreach ($db_players as $db_player) {
      $player = new Player($db_player->playerId,$db_player->birthDate,$db_player->team);
      array_push($players, $player);
    }
    return $players;
  }

  public static function getPlayersByTeam($team) {
    $players = array();
    $db_players = DBClass::query('SELECT * FROM players WHERE team=?', array($team));
    foreach ($db_players as $db_player) {
      $player = new Player($db_player->playerId,$db_player->birthDate,$db_player->team);
      array_push($players, $player);
    }
    return $players;
  }

  public static function getPlayersByBirthday($birthDate) {
    $players = array();
    $db_players = DBClass::query('SELECT * FROM players WHERE birthDate=?', array($birthDate));
    foreach ($db_players as $db_player) {
      $player = new Player($db_player->playerId,$db_player->birthDate,$db_player->team);
      array_push($players, $player);
    }
    return $players;
  }

  public static function addMatch(Match $match) {
    $result = DBClass::execute(
      'INSERT INTO matches (code,matchDate,matchTime,homeTeam,awayTeam,out,sportsHallId) VALUES (?, ?, ?, ?, ?, ?, ?)',
      array($match->code, $match->matchDate, $match->matchTime, $match->homeTeam, $match->awayTeam, $match->outMatch, $match->sportsHallId));
    return $result;
  }

  public static function addPlayer(Player $player) {
    $result = DBClass::execute(
      'INSERT INTO players (playerId,birthDate,team) VALUES (?, ?, ?)',
      array($player->playerId, $player->birthDate, $player->team));
    return $result;
  }

  public static function addSportsHall(SportsHall $sportsHall) {
    $result = DBClass::execute(
      'INSERT INTO sportshalls (sportshallId,name,street,city,phoneNumber,mapsURL,club) VALUES (?, ?, ?, ?, ?, ?, ?)',
      array($sportsHall->sportshallId, $sportsHall->name, $sportsHall->street, $sportsHall->city, $sportsHall->phoneNumber, $sportsHall->mapsURL, $sportsHall->club));
    return $result;
  }

  public static function uploadFile($file,$file_type,$file_size) {
    $result = DBClass::execute(
      'INSERT INTO file_uploads (file,type,size) VALUES (?, ?, ?)',
      array($file,$file_type,$file_size));
    return $result;
  }

  // public static function getStates(Country $country) {
  //     $states = array();

  //     $db_states = DBClass::query('SELECT * FROM states WHERE code=?', array($country->code));
  //     foreach ($db_states as $db_state) {
  //         $state = new State($db_state->name);
  //         array_push($states, $state);
  //     }

  //     return $states;
  // }

  // public static function addState(State $state, Country $country) {
  //     return DBClass::execute(
  //         'INSERT INTO states (name, code) VALUES (?, ?)',
  //         array($state->name, $country->code));
  // }
}

?>
