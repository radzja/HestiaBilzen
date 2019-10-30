<?php
class SportsHall {

  public $sportshallId;
  public $name;
  public $street;
  public $city;
  public $phoneNumber;
  public $mapsURL;
  public $club;

  public function __construct($sportshallId,$name = '',$street = '',$city = '',$phoneNumber = '',$mapsURL = '',$club = '') {
    $this->sportshallId = $sportshallId;
    $this->name = $name;
    $this->street = $street;
    $this->city = $city;
    $this->phoneNumber = $phoneNumber;
    $this->mapsURL = $mapsURL;
    $this->club = $club;
  }

}
