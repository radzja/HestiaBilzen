# HestiaBilzen

Zowel de Angular frontend als de backend (backendPHP) zitten in de project folder HestiaBilzen.
Onze backend & sqlite database hebben we online gehost op hestiabilzen.be

## Volg onderstaande stappen om het volledige project lokaal te draaien met SQLite database

* Installeer de VS Code extensies: PHP Server, SQL tools & SQLite
* Start backendPHP: rechtermuis klik in een PHP file -> PHP Server: Serve Project
* Wijzig remoteHost = 'https://www.hestiabilzen.be/backendPHP/' in de Angular services naar de url van je PHP Server
* Start het Angular project: ng serve -o

## Volg onderstaande stappen om het volledige project lokaal te draaien zonder SQLite database (dummy backend)

* Open de file: config.php in de backendPHP folder en wijzig de variabele naar "$dummyBackend = true;"
* Installeer de VS Code extensies: PHP Server
* Start backendPHP: rechtermuis klik in een PHP file -> PHP Server: Serve Project
* Wijzig remoteHost = 'https://www.hestiabilzen.be/backendPHP/' in de Angular services naar de url van je PHP Server
* Start het Angular project: ng serve -o
