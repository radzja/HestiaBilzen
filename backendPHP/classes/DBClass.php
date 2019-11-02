<?php
// Singleton class DBClass to connect to SQLite database & execute SQL queries
class DBClass {
  private static $DB_CONNECTIONSTRING = null;
  private static $DB_USERNAME = '';
  private static $DB_PASSWORD = '';
  private static $db = null;
  private static $instance = null;   // Singleton instance variable

  private function __construct() {
    $absPath = substr(dirname(__FILE__), 0, -8);    // Absolute path to local SQLite database at "/backendPHP/HestiaBilzen.db"
    self::$DB_CONNECTIONSTRING = 'sqlite:' . $absPath . '/HestiaBilzen.db';
  }

  public static function getInstance() {
    if (self::$instance == null) {
      self::$instance = new DBClass();
    }
    return self::$instance;
  }

  public function getCONNECTIONSTRING() {
    return self::$DB_CONNECTIONSTRING;
  }

  protected static function connect() {
    self::$db = new PDO(self::$DB_CONNECTIONSTRING, self::$DB_USERNAME, self::$DB_PASSWORD);
  }

  function setAbsPath($value) {
    self::$absPath = $value;
  }

  public static function execute($sql, $values = array()) {
    if(self::$db === null) {
      self::connect();
    }
    $statement = self::$db->prepare($sql);
    $statement->execute($values);
    return $statement;
  }

  public static function query($sql, $values = array()) {
    $statement = self::execute($sql, $values);
    return $statement->fetchAll(PDO::FETCH_CLASS);
  }
}
?>
