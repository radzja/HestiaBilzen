<?php
$dummyBackend = false;

if ($dummyBackend) {
  $matches = json_decode('{"sportshallId":"1","name":"Sporthal de Kimpel","street":"Eikenlaan 25","city":"3740 Bilzen","phoneNumber":"089\/51.95.30","mapsURL":"https:\/\/www.google.com\/maps\/embed?pb=!1m18!1m12!1m3!1d2518.122925743592!2d5.509982415746505!3d50.865923979534934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0e0b9fd62add3%3A0xfb1038a7e0c9a39f!2sDe%20Kimpel!5e0!3m2!1sen!2sbe!4v1571907432538!5m2!1sen!2sbe","club":null}');
  echo json_encode($matches);
}
else {
  require_once '../classes/SportsHallsRepository.php';

  header('Access-Control-Allow-Origin: http://localhost:4200');
  header('Content-type: application/json');

  if(isset($_GET['id']) && is_string($_GET['id'])) {
    $sportsHall = SportsHallsRepository::getSportsHallById($_GET['id']);
    echo json_encode($sportsHall);
  }
}
?>
