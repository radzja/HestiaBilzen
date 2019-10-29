<?php
class Player {

  public $playerId;
  public $birthDate;
  public $team;

  public function __construct($playerId = '',$birthDate = '',$team = '') {
    $this->playerId = $playerId;
    $this->birthDate = $birthDate;
    $this->team = $team;
  }
}

?>
