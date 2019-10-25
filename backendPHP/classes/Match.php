<?php
class Match {

  public $code;
  public $matchDate;
  public $matchTime;
  public $homeTeam;
  public $awayTeam;
  public $out;
  public $sportsHallId;

  public function __construct($code = '',$matchDate = '',$matchTime = '',$homeTeam = '',$awayTeam = '',$out = '',$sportsHallId = '') {
    $this->code = $code;
    $this->matchDate = $matchDate;
    $this->matchTime = $matchTime;
    $this->homeTeam = $homeTeam;
    $this->awayTeam = $awayTeam;
    $this->out = $out;
    $this->sportsHallId = $sportsHallId;
  }

}
