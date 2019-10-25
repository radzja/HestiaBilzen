<?php
require_once 'DBClass.php';
require_once 'Match.php';
require_once 'MatchRepository.php';
require_once 'SportsHall.php';
require_once 'SportsHallsRepository.php';

class DBHelper {
    public static function resetDB() {
        DBClass::execute('DROP TABLE matches');
        DBClass::execute('CREATE TABLE matches (
          code VARCHAR(5) PRIMARY KEY,
          matchDate DATE,
          matchTime TIME,
          homeTeam VARCHAR(25),
          awayTeam VARCHAR(25),
          out BIT,
          sportshallId INT)');
        /*
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
            // $states = self::getStates(new Country($db_country->name, $db_country->code));
            $match = new Match($db_match->code,$db_match->matchDate,$db_match->matchTime,$db_match->homeTeam,$db_match->awayTeam,$db_match->out,$db_match->sportshallId);
            array_push($matches, $match);
        }
        return $matches;
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

    public static function addMatch(Match $match) {
        $result = DBClass::execute(
            'INSERT INTO matches (code,matchDate,matchTime,homeTeam,awayTeam,out,sportsHallId) VALUES (?, ?, ?, ?, ?, ?, ?)',
            array($match->code, $match->matchDate, $match->matchTime, $match->homeTeam, $match->awayTeam, $match->outMatch, $match->sportsHallId));
        // if (count($country->states) > 0) {
        //     foreach ($country->states as $state) {
        //         self::addState($state, $country);
        //     }
        // }
        return $result;
    }

}
?>
