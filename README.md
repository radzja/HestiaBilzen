# HestiaBilzen

Zowel de Angular frontend als de backendPHP zitten in de project folder HestiaBilzen.

## Volg onderstaande stappen om het project lokaal te draaien met SQLite database

* Installeer de VS Code extensies: PHP Server, SQL tools & SQLite
* Start backendPHP: rechtermuis klik in een PHP file -> PHP Server: Serve Project
* Start het Angular project: ng serve -o

## Volg onderstaande stappen om het project lokaal te draaien zonder SQLite database (dummy backend)

* Open de file: config.php in de backendPHP folder en wijzig de variabele naar "$dummyBackend = true;"
* Installeer de VS Code extensies: PHP Server
* Start backendPHP: rechtermuis klik in een PHP file -> PHP Server: Serve Project
* Start het Angular project: ng serve -o
