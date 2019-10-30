<?php
require_once 'DBHelper.php';
require_once 'SportsHall.php';

class SportsHallsRepository {

  public static function init() {
    /*
    DBHelper::resetDB();
    $sportsHalls = array();
    DBHelper::addSportsHall(new SportsHall(1,'Sporthal de Kimpel','Eikenlaan 25','3740 Bilzen','089/51.95.30','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2518.122925743592!2d5.509982415746505!3d50.865923979534934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0e0b9fd62add3%3A0xfb1038a7e0c9a39f!2sDe%20Kimpel!5e0!3m2!1sen!2sbe!4v1571907432538!5m2!1sen!2sbe'));
    DBHelper::addSportsHall(new SportsHall(2,'Sportcomplex De Damburg','Brogelerweg 59','3950 Bocholt','089/20.19.70','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2501.6993554192923!2d5.565792415547818!3d51.16933184318597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0d463c68cef7d%3A0xe232f8f4ec459649!2sSporthal%20De%20Damburg!5e0!3m2!1sen!2sbe!4v1571907476718!5m2!1sen!2sbe'));
    DBHelper::addSportsHall(new SportsHall(3,'Sporthal de Winning','Hannuitstraat 9','3890 Gingelom','011/88.37.14','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2526.0208851933735!2d5.1274017999999995!3d50.7195517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c10e3a5d6496a5%3A0x2dc7676d0a1bb19!2sDe%20Winning!5e0!3m2!1sen!2sbe!4v1571907540988!5m2!1sen!2sbe'));
    DBHelper::addSportsHall(new SportsHall(4,'De Posthoorn','Stationsstraat 7','3930 Hamont','011/44.57.64','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2497.3656748116455!2d5.5448549!3d51.2491762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c72afca40a22d9%3A0xc91ceb535b03160f!2sDe%20Posthoorn!5e0!3m2!1sen!2sbe!4v1571907703573!5m2!1sen!2sbe'));
    */
  }

  public static function getSportsHalls() {
    return DBHelper::getSportsHalls();
  }

  public static function getSportsHallById($sportshallId) {
    $sportsHall = DBHelper::getSportsHallById($sportshallId);
    return $sportsHall;
  }

  public static function addSportsHall($name,$street,$city,$phoneNumber,$mapsURL,$club) {
    return DBHelper::addSportsHall(new SportsHall($name,$street,$city,$phoneNumber,$mapsURL,$club));
  }
}

?>
