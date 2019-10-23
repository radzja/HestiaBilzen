<?php
class Match {

  public $code;
  public $date;
  public $time;
  public $homeTeam;
  public $awayTeam;
  public $out;
  public $sportsHallId;

  public function __construct($code = '',$dateTime = '',$homeTeam = '',$awayTeam = '',$out = '',$sportsHallId = '') {
    $this->code = $code;
    $this->date = date('d/m/Y', strtotime($dateTime));
    $this->time = date('H:i', strtotime($dateTime));
    $this->homeTeam = $homeTeam;
    $this->awayTeam = $awayTeam;
    $this->out = $out;
    $this->sportsHallId = $sportsHallId;
  }

}
