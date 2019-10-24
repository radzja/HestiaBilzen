<?php
require_once 'DBHelper.php';
require_once 'Match.php';
require_once 'SportsHall.php';

class MatchRepository {

  public static function init() {
    DBHelper::resetDB();
    $matches = array();
    DBHelper::addMatch(new Match('QM104','26-10-19 14:30','HC MAASMECHELEN','U13 M',1,));
    DBHelper::addMatch(new Match())
      new Country('Austria', 'at',
        array(new State('Styria'), new State('Burgundy'))));
    DBHelper::addCountry(
      new Country('United States', 'us',
        array(new State('California'), new State('Maryland'))));
    DBHelper::addCountry(
      new Country('Luxembourg', 'lu'));
    DBHelper::addCountry(
      new Country('Canada', 'ca',
        array(new State('Ontario'), new State('Quebec'))));
    DBHelper::addCountry(
      new Country('Belgium', 'be',
        array(new State('Limburg'), new State('Vlaams-Brabant'))));
  }

  public static function getCountries() {
    return DBHelper::getCountries();
  }

  public static function getCountry($countryCode) {
    $countries = DBHelper::getCountries();
    $country = array_filter($countries, function($val) use ($countryCode) {
      return $val->code === $countryCode;
    });
    if(count($country) === 1) {
      $country = array_shift($country);
      $country->states = DBHelper::getStates($country);
      return $country;
    }
  }

  public static function addState($name, $countryCode) {
    return DBHelper::addState(new State($name), new Country('', $countryCode));
  }

}

?>
