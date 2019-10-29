<?php
class Player {

  public $playerId;
  public $name;
  public $birthDate;
  public $team;

  public function __construct($playerId = '',$name = '',$birthDate = '',$team = '') {
    $this->playerId = $playerId;
    $this->name = $name;
    $this->birthDate = $birthDate;
    $this->team = $team;
  }
}

?>
