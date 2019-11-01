Zowel de Angular frontend als de PHP backend zitten in de project folder HestiaBilzen.
Om lokaal te draaien moet je eerst onderstaande configuratie aanpassen.

Configuratie:
PHP SQLite database connectie configuratie: HestiaBilzen/backendPHP/classes/DBClass.php
$DB_CONNECTIONSTRING: Absoluut pad naar de sqlite database file (met relatief pad werkte het bij mij niet)

Om het project te starten start je eerst de PHP backend met PHP server extensie.
Vervolgens start je de Angular frontend met: ng serve -o