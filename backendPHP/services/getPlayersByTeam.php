<?php
$dummyBackend = true;

if ($dummyBackend) {
  $matches = json_decode('[{"playerId":"2","stamNr":"88987","name":"Matisse Schorpion","birthDate":"2000-10-18","team":"U21-J"},{"playerId":"5","stamNr":"89424","name":"Kai Neulens","birthDate":"2001-10-10","team":"U21-J"},{"playerId":"8","stamNr":"85017","name":"Jef Goemans","birthDate":"2001-06-18","team":"U21-J"},{"playerId":"11","stamNr":"86540","name":"Jordy Latet","birthDate":"2002-06-21","team":"U21-J"},{"playerId":"14","stamNr":"90067","name":"Indra Gerets","birthDate":"1999-10-25","team":"U21-J"},{"playerId":"17","stamNr":"89694","name":"Indra Duwe","birthDate":"2001-06-30","team":"U21-J"},{"playerId":"20","stamNr":"89444","name":"Caro Vanspauwen","birthDate":"2002-05-21","team":"U21-J"},{"playerId":"23","stamNr":"84862","name":"Noor Valkeneers","birthDate":"2004-03-03","team":"U21-J"},{"playerId":"26","stamNr":"84865","name":"Fien","birthDate":"2004-06-25","team":"U21-J"},{"playerId":"29","stamNr":"87651","name":"Jasper Nijssen","birthDate":"2003-06-22","team":"U21-J"},{"playerId":"32","stamNr":"87748","name":"Cederic Vandereycken","birthDate":"2004-01-23","team":"U21-J"},{"playerId":"35","stamNr":"87051","name":"Quinten Cosemans","birthDate":"2004-04-05","team":"U21-J"},{"playerId":"38","stamNr":"89296","name":"Guillaume Janssen","birthDate":"2004-09-07","team":"U21-J"},{"playerId":"41","stamNr":"88484","name":"Jade Molders","birthDate":"2004-03-17","team":"U21-J"},{"playerId":"44","stamNr":"89295","name":"Amber Biesmans","birthDate":"2005-01-16","team":"U21-J"},{"playerId":"47","stamNr":"89099","name":"Jinthe Moens","birthDate":"2005-10-21","team":"U21-J"},{"playerId":"50","stamNr":"88667","name":"Fleur Withofs","birthDate":"2006-01-26","team":"U21-J"},{"playerId":"53","stamNr":"87747","name":"Anir Boutakhrit","birthDate":"2005-02-21","team":"U21-J"},{"playerId":"56","stamNr":"87443","name":"Loic Lacante","birthDate":"2006-07-09","team":"U21-J"},{"playerId":"59","stamNr":"88143","name":"Erion Saradaku","birthDate":"2007-12-26","team":"U21-J"},{"playerId":"62","stamNr":"87127","name":"Sam Stulens","birthDate":"2007-12-17","team":"U21-J"},{"playerId":"65","stamNr":"89925","name":"Jinthe Charlier","birthDate":"2006-08-07","team":"U21-J"},{"playerId":"68","stamNr":"89795","name":"Maxima Nysen","birthDate":"2006-04-21","team":"U21-J"},{"playerId":"72","stamNr":"89106","name":"Jesse Colson","birthDate":"2008-07-04","team":"U21-J"},{"playerId":"75","stamNr":"88694","name":"Isabo Timmers","birthDate":"2006-12-17","team":"U21-J"},{"playerId":"78","stamNr":"89429","name":"Lotte Moens","birthDate":"2008-05-23","team":"U21-J"},{"playerId":"81","stamNr":"89685","name":"Anouck Biesmans","birthDate":"2009-03-17","team":"U21-J"},{"playerId":"84","stamNr":"89564","name":"Elias Pierson","birthDate":"2009-10-22","team":"U21-J"}]');
  echo json_encode($matches);
}
else {
  require_once '../classes/PlayersRepository.php';

  header('Access-Control-Allow-Origin: http://localhost:4200');
  header('Content-type: application/json');

  if(isset($_GET['team']) && is_string($_GET['team'])) {
    $players = PlayersRepository::getPlayersByTeam($_GET['team']);
    echo json_encode($players);
  }
}
?>
