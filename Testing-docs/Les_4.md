# Les 4

## Integration testing

* Bottom Up
* Top Down: Doubles (fakes) to simulate underlying parts
* Big Bang: Alle testen in één keer: 
  * Niet systematisch / niet altijd mogelijk (soms zeer moeilijk)
  * Makkelijk: geen drivers, geen doubles
  * Lukt wel voor kleine systemen of bij kleine aanpassingen aan bestaand iets

### Sommige delen heb je niet in de hand (mailserver, ...)

* Testen nog wel mogelijk door gebruik te maken van een double: bijvoorbeeld double die een mailserver simuleert

### Voorbeeld: Integration testing

* Gebruik een echt klantenbestand
* Fake mailserver (double / fake)
* Happy path test (een testcase die zeker zou moeten lukken)
* Failing test: nieuwe user aanmaken met een mail adres dat reeds in gebruik is door een andere user
  * Test checked of dit niet lukt
  * Ook nakijken of de juiste foutmelding getoond wordt!
