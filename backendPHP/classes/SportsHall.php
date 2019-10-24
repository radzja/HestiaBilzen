<?php
class SportsHall {

  public $sportshallId;
  public $clubId;
  public $name;
  public $street;
  public $city;
  public $mapsURL;

  public function __construct($sportshallId,$clubId,$name = '',$street = '',$city = '',$phoneNumber = '',$mapsURL = '') {
    $this->sportshallId = (int) $sportshallId;
    $this->clubId = (int) $clubId;
    $this->name = $name;
    $this->street = $homeTeam;
    $this->city = $city;
    $this->mapsURL = $mapsURL;
  }

}
