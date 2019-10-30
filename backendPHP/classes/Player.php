<?php
class Player {

  public $playerId;
  public $stamNr;
  public $name;
  public $birthDate;
  public $team;

  public function __construct($playerId = '',$stamNr,$name = '',$birthDate = '',$team = '') {
    $this->playerId = $playerId;
    $this->stamNr = $stamNr;
    $this->name = $name;
    $this->birthDate = $birthDate;
    $this->team = $team;
  }
}

?>
